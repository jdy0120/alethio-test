import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './_providers/AppProviders';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
