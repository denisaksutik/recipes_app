import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import style from '../src/styles/main.scss';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import Data from './components/data/Data';

render(
	<Router>
	<App>
	<Switch>
	<Route exact path="/" component={Greetings} />
	<Route path="/signup" component={SignupPage} />
	<Route path="/data" component={Data} />
	</Switch>
	</App>
	</Router>
	, document.getElementById('app'));﻿