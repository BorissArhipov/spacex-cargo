import React, {Component} from 'react';
import Header from './../header/header';
import Main from '../main/main';
import InfoBox from '../infoBox/infoBox';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';

import 'bootstrap-css-only';
import './app.css'

class App extends Component {
    handleLoading() {
        if(this.props.loading) {
            return <Spinner/>;
        } else {
            return <Main/>;
        }
    }

	render() {
		return (
			<div className="app--con">
                <Header/>
                <InfoBox/>
                {this.handleLoading()}
			</div>
		);
    }
}

function mapStateToProps( { coFetchShipments: { loading } }) {
    return { loading };
}

export default connect(mapStateToProps)(App);