import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './../header/header';


class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					{/* <Route exact path="/" component={BoardContainer} />
					<Route path="/b/:id" component={ActiveBoard} /> */}
				</Switch>	
			</div>
			
		);
    }
}

export default App;