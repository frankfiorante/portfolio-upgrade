import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { Root } from './Root';
import { history } from './stores/helpers';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Root />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);