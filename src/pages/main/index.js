import React, { Component } from 'react';

import Sidebar from '../../components/sidebar';
import Banner from '../../components/banner';
import Espaco from '../../components/espaco';
import Portfolio from '../../components/portfolio';
import Filter from '../../components/filter';

export default class Main extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <Banner />
                <Espaco />
                <Portfolio />
                <Filter />
            </div>
        )
    }
}