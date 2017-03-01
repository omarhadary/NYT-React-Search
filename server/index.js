import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import makeRoutes from './router/routes.jsx';

const appEntry = <Router history={browserHistory}>{makeRoutes()}</Router>;
ReactDOM.render(
	appEntry,
	document.getElementById('root')
);
