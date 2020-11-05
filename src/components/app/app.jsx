import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './../header/header';
import SideBar from '../sideBar/sideBar';
import ShipmentPage from '../shipmnetPage/shipmentPage';
import { connect } from 'react-redux';


class App extends Component {
	render() {
		return (
			<div>
                <Header/>
                <SideBar/>
                <Switch>
                    {
                        this.props.shipments.map(item => {
                            return <Route 
                                key={`${item.id}-page`} 
                                exact 
                                path={`/${item.id}`} 
                                render={() => {
                                        return <ShipmentPage itemId={item.id} />
                                }}
                            />
                        })
                    }
                </Switch>	    
			</div>
		);
    }
}

function mapStateToProps( { coFetchShipments: { shipments } }) {
    return { shipments };
}

export default connect(mapStateToProps)(App);