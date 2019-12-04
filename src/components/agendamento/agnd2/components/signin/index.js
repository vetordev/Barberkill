import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../../services/api';
import './styles.css';

export default function Signin () {

    const [password, setPassword] = useState('');
    const [incorrectPass, setIncorrectPass] = useState('');

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
                break;
            }
        }
        
        if (aux == false) {
            setIncorrectPass('Senha incorreta');
            setPassword('');
        }

    }

    return (
        <>
            <input type="password" name="" id="" onChange={ event => setPassword(event.target.value) }/>
            <p> { incorrectPass } </p>
            <Link to="/agnd3">
                <button type="button" onClick={fetchLogin}>Logar</button>
            </Link>
        </>
    );
};
