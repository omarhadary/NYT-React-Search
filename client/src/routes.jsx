import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Main from './Main.js';
import Saved from './Saved.js';
import Search from './Search.js';

export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={Main}/>

		<Route path="/saved" component={Saved}/>
		<Route path="/search" component={Search}/>
	</Route>;
};
