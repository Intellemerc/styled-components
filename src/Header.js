import React from 'react';
import logo from './logo.svg';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.secondary};
`;

const HeaderArea = styled.div`
  background-color: ${props => props.theme.secondary}
`;
export default () => (
    <HeaderArea className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Some Text</Title>
    </HeaderArea>
)