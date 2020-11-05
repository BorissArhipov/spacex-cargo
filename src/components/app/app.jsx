import React, {Component} from 'react';
import Header from './../header/header';
import Main from '../main/main';

import 'bootstrap-css-only';
import './app.css'

class App extends Component {
	render() {
		return (
			<div className="app--con">
                <Header/>
                <Main/>   
			</div>
		);
    }
}

export default App;