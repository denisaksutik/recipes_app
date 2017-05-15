import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';
import style from '../src/styles/main.scss';

import App from './components/App';
import Greetings from './components/Greetings';
import Recipes from './components/data/Recipes';

render(
	<Router>
	<App>
	<Switch>
	<Route exact path="/" component={Greetings} />
	<Route path="/recipes" component={Recipes} />
	</Switch>
	</App>
	</Router>
	, document.getElementById('app'));﻿