import React, { Component } from 'react';

import Sidebar from '../../components/sidebar';
import Banner from '../../components/banner';


export default class Main extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <Banner />
            </div>
        )
    }
}