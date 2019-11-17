import styled from 'styled-components';

export const Container = styled.span`
  position: relative;
  > :last-child {
    position: absolute;
    top: 17px;
    right: 10px;
    cursor: pointer;
  }
  > input {
    width: 100%;
    padding: 10px;
    padding-right: 35px;
    border: 1px solid #0003;
    margin: 8px 0;
    font-size: 18px;
  }
`;
