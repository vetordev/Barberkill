import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as sha from 'sha.js';

import api from '../../../../../services/api';
import './styles.css';
import { isNumber } from 'util';

export default function Signin () {

    const [password, setPassword] = useState('');
    const [incorrectPass, setIncorrectPass] = useState('');
    const [link, setLink] = useState('/agnd2');
    const email = localStorage.getItem('email');
    async function fetchLogin() {

        var aux = false;
        const response = await api.get('/clients');
        
        for (let client of response.data) {
            if (client.password == password) {
                localStorage.setItem('client_id', client.id)
                alert('Logado com sucesso!');
                aux = true;
                setIncorrectPass('');
                setPassword('');
                setLink('/agnd3');
                // storageCliId();
                break;
            }
        }
        
        if (aux == false) {
            setIncorrectPass('Senha incorreta');
            setPassword('');
            setLink('/agnd2');
        }

    }
    async function storageCliId() {
        // const response = await api.get('/clients', email);

        // console.log(response.data);
    }

    return (
        <>
            <input type="password" name="pass" id="pass" onChange={ event => setPassword(sha('sha512').update(event.target.value).digest('hex')) } placeholder="Sua senha" required/>
            <p> { incorrectPass } </p>
            <Link to={link}>
                <button type="button" onClick={fetchLogin}>Logar</button>
            </Link>
        </>
    );
};
