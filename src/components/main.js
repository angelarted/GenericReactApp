import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Hallo from './hallo';
import Goodbye from './goodbye';

const Main = function(){

	return(
 		<Switch>
			<Route path="/goodbye" component={Goodbye} />
			<Route path="/" component={Hallo} />
		</Switch>
	);

}

export default Main;