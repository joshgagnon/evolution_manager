import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import React from 'react';
import Main from './components/main'
import Landing from './components/landing';
import Home from './components/home';


export default (
	<Route handler={Main} path="/">
	  <Route handler={ Landing } path="" />
	  <Route handler={ Home } path="home" />
	  <DefaultRoute handler={ Landing }  />
	  <NotFoundRoute handler={Landing}/>
	</Route>
);