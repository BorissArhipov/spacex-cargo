import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import SideBar from '../sideBar/sideBar';
import ShipmentPage from '../shipmnetPage/shipmentPage';
import { connect } from 'react-redux';

import 'bootstrap-css-only';
import './main.css'

class Main extends Component {
	render() {
        if(this.props.shipments.length === 0) {
            return (
                <section className="main">
                    <div className="container">
                        <div className="main--con">
                            Please load the data!   
                        </div>     
                    </div>    
                </section>
            );    
        } else {
            return (
                <section className="main">
                    <div className="container">
                        <div className="main--con">
                            <SideBar/>
                            <Switch>
                                <Route path="/"
                                    render={() => <ShipmentPage itemId={null}/>}
                                    exact />
                                {
                                    this.props.shipments.map(item => {
                                        const pathTo = () => {
                                            return item.name.split(' ').join('-').toLowerCase();
                                        }
                                        return <Route 
                                            key={`${item.id}-page`} 
                                            exact 
                                            path={`/${pathTo()}`} 
                                            render={() => {
                                                    return <ShipmentPage itemId={item.id} />
                                            }}
                                        />
                                    })
                                }
                            </Switch>	    
                        </div>     
                    </div>    
                </section>
            );    
        }
		
    }
}

function mapStateToProps( { coFetchShipments: { shipments } }) {
    return { shipments };
}

export default connect(mapStateToProps)(Main);