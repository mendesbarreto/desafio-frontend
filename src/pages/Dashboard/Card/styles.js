import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #fef3e4;
  width: 90%;
  padding: 25px 50px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px 1px #3333;
  animation: show 1s linear;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    max-width: none;
    padding: 25px;
  }
  > svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 14px;
  color: #505050;
`;

export const WeatherDay = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
  color: #505050;
`;

export const Details = styled.div`
  display: flex;
  color: #505050;
  display: grid;
  grid-template-columns: 120px auto;
  grid-template-rows: auto auto;
  > span {
    display: flex;
    margin-bottom: 15px;
    font-weight: lighter;

    > strong {
      margin-left: 5px;
    }
    &.temperatures > div {
      font-weight: bold;
      margin-right: 5px;
      display: flex;
      align-items: center;
    }
  }
`;

export const DiviserCard = styled.div`
  border-bottom: 2px solid #fb9832;
  margin: 0 -25px;
  width: calc(100% + 50px);
  margin-bottom: 15px;
`;

export const NextDaysList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    > span {
      margin-bottom: 5px;
      color: #505050;
    }
    > div {
      color: #fa8000;
      > span {
        margin-right: 3px;
      }
    }
  }
`;
