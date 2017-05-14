import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
				<ul className="nav navbar-nav navbar-left">
					<li><Link to="/">Recipes</Link></li>
				</ul>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/data">Data</Link></li>
						<li><Link to="/signup">Sign up</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}