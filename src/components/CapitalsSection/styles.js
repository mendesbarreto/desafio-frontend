import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 500px;
  padding: 15px;

  > div {
    > div {
      display: flex;
    }
    > h2 {
      font-size: 2.3rem;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 475px) {
    > div {
      > div {
        display: block;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  margin: 20px 0 0 5px;

  > thead {
    > tr {
      > th {
        font-weight: 200;
        padding: 5px;
      }
    }
  }

  > tbody {
    > tr {
      > th {
        padding: 8px 5px;
        text-align: start;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 475px) {
    margin: 0;

    > thead {
      display: none;
    }
  }
`;
