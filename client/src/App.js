import React, { PropTypes, Component } from 'react';
// Grabs the Routes
// import routes from '../server/router/routes';
import './App.css';
// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Main';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="page-header">
          <h1>{getNiceName(this.props.routes)}{' '}
						<small>page</small>
					</h1>
				</div>
				<div className="container App-content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default App;
