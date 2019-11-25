import styled from 'styled-components';

export const Container = styled.div`
  max-width: 620px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 80px auto;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }

  & > div {
    width: 85%;
    margin: 0 auto;

    &:first-of-type {
      @media (max-width: 600px) {
        width: 100% !important;
      }
    }
  }

  hr {
    width: 100%;
  }
`;

export const WrapInput = styled.div`
  position: relative;
  width: 100%;
  background: red;
  margin: 20px 0;
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    padding: 15px;
    font-size: 20px;
    border: ${props => (props.error ? '3px solid red !important' : null)};

    &::placeholder {
      color: #999;
      font-size: 16px;
    }
  }

  & > svg {
    position: absolute;
    right: 0;
    margin-right: 15px;
    width: 30px;
    height: 30px;
    color: #999;
    cursor: pointer;
  }
`;
