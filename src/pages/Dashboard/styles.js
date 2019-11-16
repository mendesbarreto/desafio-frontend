import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#fa7f00, #fcbb01);
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  transition: 1s all ease-in-out;
  > div {
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      width: 90%;
      margin-bottom: 40px;
    }
    > h1 {
      transition: 1s all ease-in-out;
      margin: ${({ current }) =>
        current.location && current.location.city ? '10px 0' : '50px 0'};
      color: #fff;
      font-size: ${({ current }) =>
        current.location && current.location.city ? '30px' : '60px'};
    }
  }
  @media (max-width: 550px) {
    > div {
      width: 100%;
      max-width: none;
      > span {
        margin-bottom: 25px;
      }
      > h1 {
        margin: ${({ current }) =>
          current.location && current.location.city
            ? '10px 20px'
            : '50px 20px'};
      }
    }
  }
`;

export const Diviser = styled.div`
  border-bottom: 1px solid #fff9;
  width: 100%;
`;

export const CapitalsContainer = styled.div`
  width: 450px;
  @media (max-width: 550px) {
    width: 100%;
    padding: 0 30px;
    > div {
      flex-direction: column;
      > div:last-child {
        > span {
          display: none;
        }
      }
    }
  }
  > h2 {
    font-size: 26px;
    color: #fff;
    margin: 15px 0;
  }
  > div {
    display: flex;
    > div {
      flex: 1;
    }
  }
`;
