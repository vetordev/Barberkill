import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function click(direction) {
    alert(direction)
}

export default class BtnBack extends Component {
    
    render() {
        return (
        <div id="container-btn-back">
            {/* <Link to={btnback.props.id}> */}
                <button onClick={event => click(event.target.direction)} direction={this.props.direction} id="btnback">back</button>
            {/* </Link> */}
        </div>
        )
    }
}