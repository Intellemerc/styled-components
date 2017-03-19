import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Header from './Header';
import PaperGroup from './PaperGroup'

const ContentArea = styled.div`
  background-color: ${props => props.theme.main}
`;

const StyledButton = styled(RaisedButton) `
  background-color: ${props => props.theme.secondary} !important;
`

const Span = styled.span`
  color: white;
`;
class App extends Component {
  render() {
    const { changeTheme, changeColor } = this.props;
    return (
      <div className="App">
        <Header />
        <ContentArea>
          <div>Move Slider to change Hue</div>
          <p className="App-intro">
            <div style={{width: 600, marginLeft: 'auto', marginRight: 'auto'}} >
              <Slider defaultValue={180} min={0} max={360} onChange={changeColor}/>
            </div>
            <RaisedButton primary label="Change Theme" onClick={changeTheme}/>
            <StyledButton secondary label="Default"/>
            <Span>To get started, edit <code>src/App.js</code> and save to reload.</Span>
            <br />
            
          </p>
          <PaperGroup />
        </ContentArea>
      </div>
    );
  }
}

export default App;
