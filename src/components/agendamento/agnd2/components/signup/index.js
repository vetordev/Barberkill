import React, { useState } from 'react';

import api from '../../../../../services/api';
// import './styles.css';

export default function Signup() {
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cel, setCel] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    async function registerClient() {
        const data = {
            email: localStorage.getItem("email"),
            name: name,
            cpf: cpf,
            telephone: cel,
            cellphone: cel,
            password: password2,
        }

        await api.post('/clients', data);
    }

    return (
        <>
            <input type="text" name="name" id="name" placeholder="Seu nome" onChange={ event => setName(event.target.value) } />
            <input type="text" name="cpf" id="cpf" placeholder="CPF" onChange={ event => setCpf(event.target.value) } />
            <input type="tel" name="cel" id="cel" placeholder="Telefone" onChange={ event => setCel(event.target.value) } />
            <input type="password" name="password1" id="password1" placeholder="Senha" onChange={ event => setPassword1(event.target.value) } />
            <input type="password" name="password2" id="password2" placeholder="Confirmar senha" onChange={ event => setPassword2(event.target.value) } />
            <button onClick={ registerClient }>Cadastrar</button>
        </>
    );
};
