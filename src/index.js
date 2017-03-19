import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ThemeProvider } from 'styled-components';

import changeHue from './changeHue'

injectTapEventPlugin();

class Index extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      theme: {
        main: '#101543',
        secondary: '#968D81'
      }
    };
    this.toggleColors = this.toggleColors.bind(this);
    this.changeColors = this.changeColors.bind(this);
  }
  changeColors(evt, newVal){
    this.setState({
      theme: {
        main: changeHue(this.state.theme.secondary, newVal),
        secondary: changeHue(this.state.theme.main, newVal)
      }
    });
  }
  toggleColors() {
    this.setState({
      theme: {
        main: this.state.theme.secondary,
        secondary: this.state.theme.main,
      }
    });
  }

  render() {
    const materialTheme = getMuiTheme({
      palette: {
        primary1Color: this.state.theme.secondary,
        accent1Color: this.state.theme.main,
      },
    });
    return <ThemeProvider theme={this.state.theme}>
      <MuiThemeProvider muiTheme={materialTheme}>
        <App changeTheme={this.toggleColors} changeColor={this.changeColors}/>
      </MuiThemeProvider>
    </ThemeProvider >;
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
