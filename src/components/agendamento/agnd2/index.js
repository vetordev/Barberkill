import React, { useState } from 'react';

import Signin from './components/signin';
import Signup from './components/signup';
import Init from './components/init';

import './styles.css';
import api from '../../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Agnd2() {

    const [stage, setstage] = useState(<Init/>); // indica a 'rota' (Login ou Cadastro) de acordo com a existência do usuário no db
    const [email, setEmail] = useState('');

    async function findEmail() {

        // indicar qual rota da api deseja visualizar
        const response = await api.get('/clients');
        console.log(response.data);

        for (let client of response.data){
            if (client.email == email) {
                handleStage(<Signin />, true);
                break;
            }
            else handleStage(<Signup/>, false); //up
        }
    }

    function handleStage(state, loginStatus) {
        // if (loginStatus == true){
            localStorage.setItem("email", email);
        // }
        setstage(state);
    }

    return (
        <div className="container-aux start" id="aux-agend">
            <h1 id="h1agnd2"><b>Entre</b> ou <b>Cadastre-se</b> com seu endereço de e-mail</h1>
            <div id="lateral">
                <input type="email" name="email" id="email" placeholder="Seu e-mail" onChange={ event => setEmail(event.target.value) }/>
                <button type="button" id="find-button" onClick={ findEmail }>
                    <FontAwesomeIcon icon={faSearch} className="ico"/>
                </button>
            </div>

            { stage }

        </div>
    );
} 