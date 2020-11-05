import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import './infoBox.css';

class InfoBox extends Component {
    render() {
        const { message, color } = this.props.coInfoReducer;
        let active;
        if(message === null || '') {
            active = 'infobox'
        } else {
            active = 'infobox infobox-active'
        }
        return (
            <div className={active} style={{backgroundColor: color}}>
                {message}
            </div>
        );    
    }    
}
  
function mapStateToProps( {coInfoReducer}) {
    return {
        coInfoReducer
    }
}


export default connect(mapStateToProps)(InfoBox);