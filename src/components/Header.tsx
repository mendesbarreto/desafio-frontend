import React from 'react';
import styled from 'styled-components';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <StyledHeader>{title}</StyledHeader>
  )
}

const StyledHeader = styled.h1`
  font-size: 250%;
  text-align: center;
  padding: 48px 15px;
  margin: 0;
  color: white;
`

export default Header;
