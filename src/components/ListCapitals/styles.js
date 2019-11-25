import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0;

  h2 {
    color: #fff;
    font-size: 26px;
  }
`;

export const ListCitys = styled.div`
  max-width: 100%;
  padding: 10px 0;
  margin: 0 auto;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    width: 100%;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 5px;

      span {
        &:first-child {
          margin-right: 16px;
        }
      }
    }
  }

  & > div {
    margin-bottom: 12px;
    color: #333;
    display: flex;
    width: 100%;
    justify-content: space-between;

    div {
      width: 50%;

      @media (max-width: 768px) {
        &:nth-of-type(2) {
          display: none;
        }
      }

      span {
        &:nth-of-type(1) {
          margin-right: 10px;
        }
      }
    }
  }
`;
