import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App.container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path="/" component={App} exact />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
