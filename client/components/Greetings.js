import React from 'react';
import { Link } from 'react-router-dom';

const image = require('../../src/img/fon.png');

class Greetings extends React.Component {
	render() {
		return (
			<section id="firstScreen">
				<div className="greetings">
					<div className="container head_title">
						<h1>Receipes Book</h1>
						<Link type="button" className="btn btn-warning btn-lg" to="/recipes">View all</Link>
					</div>
				</div>
			</section>
		);
	}
}

export default Greetings;
