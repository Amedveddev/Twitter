import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import App from './App/App';

const rootDiv = document.getElementById('root');


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>,
    rootDiv
);