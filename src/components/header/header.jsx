import React, {Component} from 'react';
import { fetchData } from '../../actions/fetch-actions';
import { connect } from 'react-redux';
import { saveState } from '../../toLocalStorage/toLocalStorage';
import { changeSearchWord } from '../../actions/changeSearchWord';
import { Link } from 'react-router-dom';
import handleEvent from '../../actions/handleEvent';
import clearMessage from '../../actions/clearMessage';
import SideBar from '../sideBar/sideBar';
import toggleBurger from '../../actions/toggleBurger';


import './header.css';

class Header extends Component {
    render() {
        return(
            <header className="header navbar navbar-expand-lg navbar-light bg-light">
                <div className={this.props.coBurgerReducer.burger}>
                    <div className="header--con-mob">
                        <button 
                            onClick={() => this.props.fetchData()}
                            className="btn btn-primary header--btn-mob"
                        >
                            LOAD
                        </button>
                        <button 
                            onClick={() => {
                                saveState({coFetchShipments: {shipments: this.props.shipments}})
                                this.props.handleEvent('saved');
                                setTimeout(this.props.clearMessage, 4000);
                            }}
                            className="btn btn-secondary header--btn-mob"
                        >
                            SAVE
                        </button>      
                    </div>
                    <SideBar/>
                </div>
                <div className="container">
                    <div className="header--con">
                        <Link 
                            to={`/`}
                            className="navbar-brand"
                        >
                            Cargo Planner
                        </Link>
                        <div className="header--con2">
                            <input 
                                placeholder="Search" 
                                type="text"
                                onChange={e => this.props.changeSearchWord(e.target.value)}
                                className="form-control header--input"
                            />
                            <button 
                                onClick={() => this.props.fetchData()}
                                className="btn btn-primary header--btn"
                            >
                                LOAD
                            </button>
                            <button 
                                onClick={() => {
                                    saveState({coFetchShipments: {shipments: this.props.shipments}})
                                    this.props.handleEvent('saved');
                                    setTimeout(this.props.clearMessage, 4000);
                                }}
                                className="btn btn-secondary header--btn"
                            >
                                SAVE
                            </button> 
                            <button 
                                className="header--burger"
                                onClick={() => this.props.toggleBurger()}
                            >
                                <div className="header--stick"></div>
                                <div className="header--stick"></div>
                                <div className="header--stick"></div>
                            </button>     
                        </div>   
                    </div>  
                </div>
            </header>
        );
    }
}

function mapStateToProps( { coFetchShipments: { shipments }, coBurgerReducer }) {
    return { shipments, coBurgerReducer };
}

export default connect(mapStateToProps, { fetchData, changeSearchWord, handleEvent, clearMessage, toggleBurger })(Header);