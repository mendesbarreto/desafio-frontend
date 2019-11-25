import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    color: #fff;
  }

  & > div[name='boxcapital'] {
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.8) !important;
    padding: 15px 30px;

    position: relative;

    & > svg {
      position: absolute;
      width: 15px;
      height: 15px;
      right: 10px;
      top: 10px;
      color: rgba(205, 114, 0, 1);
      cursor: pointer;
    }

    & > div {
      display: flex;
      flex-direction: column;
      padding: 0 10px 10px 0;

      & > * {
        padding: 5px;
      }

      & > span {
        font-size: 16px;
        font-weight: bold;
      }

      & > strong {
        font-size: 40px;
      }

      div {
        div[name='rowboxcap'] {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 260px;

          & > span {
            padding: 5px;
            display: flex;
            align-items: center;
            width: 49%;
            justify-content: space-around;
            font-size: 16px;

            & > span {
              display: flex;
              align-items: center;

              svg {
                color: rgba(205, 114, 0, 1);
              }
            }
          }
        }
      }
    }

    div[name='nextdays'] {
      flex-direction: row;
      width: 100%;
      justify-content: space-around;

      & > div {
        display: flex;
        flex-direction: column;
        text-align: center;

        h2 {
          font-size: 16px;
        }

        div {
          font-size: 15px;
          width: 55px;
          display: flex;
          justify-content: space-between;
          color: rgba(205, 114, 0, 1);
        }
      }
    }
  }
`;
