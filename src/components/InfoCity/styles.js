import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background: #fff3e3;
  width: 100%;
  max-width: 450px;
  position: relative;
  animation: fade 1s linear;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  > svg {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
  }
`;

export const Details = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 15px;

  > strong {
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    > span {
      width: 40%;
      display: flex;
      align-items: center;
      margin-bottom: 13px;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  max-width: 400px;
  min-height: 50px;
  display: flex;

  > li:last-child {
    display: none;
  }

  > li {
    width: 25%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
  }

  @media (min-width: 475px) {
    > li:last-child {
      display: flex;
    }

    > li {
      width: 20%;
    }
  }
`;

export const Light = styled.h5`
  color: #444;
  font-weight: 200;
  margin-right: 7px;
`;

export const Info = styled.h5`
  color: #444;
  font-weight: bold;
`;

export const CelsiusInfo = styled.strong`
  color: #f98106;
  margin: 0 3px;
  font-size: 0.9rem;
`;

export const Temperature = styled.h1`
  color: #444;
  font-size: 2.2rem;
  margin-top: 18px;
`;

export const Divider = styled.div`
  border-bottom: 2.5px solid #febe00;
  width: 100%;
  max-width: 420px;
  margin-bottom: 15px;
`;
