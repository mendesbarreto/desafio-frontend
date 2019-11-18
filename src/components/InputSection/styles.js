import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 450px;

  @media (min-width: 475px) {
    width: 100%;
  }

  > input {
    border: 1px solid rgba(193, 66, 66, 0.8);
    width: 100%;
    max-width: 500px;
    height: 45px;
    margin: 20px 0;
    padding-left: 10px;
    font-size: 1.1rem;
  }

  > svg {
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 11px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 20px;
  line-height: 1.3;
`;
