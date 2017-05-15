import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
				<p className="navbar-text navbar-right">
					<Link to="/">Home</Link>
				</p>
				</div>
			</div>
		</nav>
	);
}