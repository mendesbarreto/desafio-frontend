import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  > li {
    margin: 5px 0;
    > span {
      font-weight: bold;
      margin-right: 10px;
      font-size: 12px;
      :last-child {
        margin-left: 5px;
      }
    }
  }
`;
