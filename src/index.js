import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import makeRoutes from './routes';

const appEntry = <Router history={browserHistory}>{makeRoutes()}</Router>;
ReactDOM.render(
	appEntry,
	document.getElementById('root')
);
