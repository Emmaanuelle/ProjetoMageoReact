import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/styles.css";
import { theme } from './theme';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
    <HttpsRedirect>
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>
    </HttpsRedirect>
    , document.getElementById('root')

);