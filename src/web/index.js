import React from 'react';
import {render} from 'react-dom';
import App from './App';
import style from './style.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppContainer = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


render(
  <AppContainer/>,
  document.getElementById('root')
);
