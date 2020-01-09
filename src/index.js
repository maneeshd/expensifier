'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import Working from './components/Working';
import logo from './img/react-logo.png';

const App = () => (
    <Container className="w-50 mx-auto text-center shadow py-2 mt-4 rounded">
        <Working />
        <img src={logo}></img>
    </Container>
);

ReactDOM.render(<App />, document.getElementById('app-root'));
