import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { ThemeProvider } from 'styled-components';

injectTapEventPlugin();

class Index extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      theme: {
        main: 'orange',
        secondary: 'red'
      }
    };
    this.toggleColors = this.toggleColors.bind(this);
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
        <App changeTheme={this.toggleColors}/>
      </MuiThemeProvider>
    </ThemeProvider >;
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
