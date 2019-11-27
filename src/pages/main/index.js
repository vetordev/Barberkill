import React, { Component } from 'react';

import Sidebar from '../../components/sidebar';
import Banner from '../../components/banner';
import Espaco from '../../components/espaco';
import Portfolio from '../../components/portfolio';
import Filter from '../../components/filter';
import Precos from '../../components/precos';
import Contato from '../../components/contato';
import Agendamento from '../../components/agendamento';

import api from '../../services/api';

export default class Main extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <Banner />
                <Espaco />
                <Filter />
                <Portfolio />
                <Precos />
                <Agendamento />
                <Contato />
            </div>
        )
    }
}