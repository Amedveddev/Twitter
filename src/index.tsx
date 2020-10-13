import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import App from './App/App';

const rootDiv = document.getElementById('root');


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    rootDiv
);