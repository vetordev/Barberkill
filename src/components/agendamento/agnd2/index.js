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

    function justEmail(e) {
        const letters = ["ç", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z", "@", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        if (letters.indexOf(e.key.toLowerCase()) == -1) e.preventDefault()
    }

    return (
        <div className="container-aux start" id="aux-agend">
            <h1 id="h1agnd2"><b>Entre</b> ou <b>Cadastre-se</b> com seu endereço de e-mail</h1>
            <div id="lateral">
                <input type="email" name="email" id="email" placeholder="Seu e-mail" maxLength="100"
                    onChange={ event => setEmail(event.target.value) }
                    onKeyDown={ event => justEmail(event.target.value) }
                />
                <button type="button" id="find-button" onClick={ findEmail }>
                    <FontAwesomeIcon icon={faSearch} className="ico"/>
                </button>
            </div>

            { stage }

        </div>
    );
} 