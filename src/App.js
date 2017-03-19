import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.secondary};
  transition: all 750ms cubic-bezier(0.23, 1, 0.32, 1) 500ms
`;

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: ${props => props.theme.secondary};
  border: none;
  border-radius: 3px;
  transition: all 750ms cubic-bezier(0.23, 1, 0.32, 1) 500ms
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;
const ContentArea = styled.div`
  background-color: ${props => props.theme.main}
  transition: all 45ms cubic-bezier(0.23, 1, 0.32, 1) 250ms
`;
const StyledButton = styled(RaisedButton) `
  background-color: ${props => props.theme.secondary} !important;
  transition: all 45ms cubic-bezier(0.23, 1, 0.32, 1) 500ms
`

const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.secondary} !important;
  height: 100px !important;
  width: 100px !important;
  margin: 20px !important;
  textAlign: center !important;
  display: inline-block !important;
  transition: all 75ms cubic-bezier(0.23, 1, 0.32, 1) 250ms !important;
`;

class App extends Component {
  render() {
    const { changeTheme } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Some Text</Title>
        </div>
        <ContentArea>
          <Title>Some other text</Title>
          <p className="App-intro">
            <RaisedButton primary label="Default" onClick={changeTheme}/>
            <StyledButton secondary label="Default" />
            To get started, edit <code>src/App.js</code> and save to reload.
            <Input placeholder="Name" type="text" />
            <br />
            <StyledPaper zDepth={1} />
            <StyledPaper zDepth={2} />
            <StyledPaper zDepth={3} />
            <StyledPaper zDepth={4} />
            <StyledPaper zDepth={5} />
          </p>
        </ContentArea>
      </div>
    );
  }
}

export default App;
