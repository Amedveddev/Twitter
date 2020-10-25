import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import {Provider} from 'react-redux';
import store from './Store';

import App from './App/App';

const rootDiv = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router >
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    rootDiv
);