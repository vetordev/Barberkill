import React from 'react';

import { Link } from 'react-router-dom';

import api from '../../../../../services/api';
// import './styles.css';

export default function Init () {

    async function findEmail() {
        // event.preventDefault();
        alert("oi");
        const response = await api.get('/clients');

        console.log(response.data.email);
    }
    return (
        <div id="init">
            <p class="text-init"> Se você já possui uma conta, pode fazer login com ela! Se ainda não possui, não se preocupe, nós cadastraremos você.</p>
            <Link to={"/agnd2/signin"}>
                <button type="button">Buscar</button>
            </Link>
        </div>
    )
};
