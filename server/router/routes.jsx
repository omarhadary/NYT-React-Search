import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../src/App.js';
import Main from '../src/Main.js';
import Saved from '../src/saved.js';
import Search from '../src/search.js';

export default () => {
	return <Route path="/" component={App}>
		<IndexRoute component={Main}/>

		<Route path="/saved" component={Saved}/>
		<Route path="/Search" component={Search}/>
	</Route>;
};
