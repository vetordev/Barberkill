import React from 'react';

import Signin from './components/signin';
import Init from './components/init';

import './styles.css';
import Routes from './routes';
import api from '../../../services/api';

export default function Agnd2() {
    var i = 1;
    async function findEmail() {

        // indicar qual rota da api deseja visualizar
        const response = await api.get('/clients');

        const email = document.getElementById('email').value;

        const dados = response.data;

        console.log(dados)
        alert(dados.email);
        //for (var i = 0; i < response.data.length; i++) {
            // console.log(response.data[i].email);
       //     if (email == dados[i].email)
      //      { 
                // alert("Encontrado!"); 
        //         i = 0;
        //         break;
        //     }
        //     else
        //     {
        //         alert("Não encontrado");
        //         i = 1;
        //     } 
        // }

        
    }
    return (
        <div className="container-aux start" id="aux-agend">
            <h1 id="h1agnd2"><b>Entre</b> ou <b>Cadastre-se</b> com seu endereço de e-mail</h1>
            <input type="email" name="email" id="email" placeholder="Seu e-mail"/>
            <button type="button" onClick={findEmail}>Buscar</button>
            { i == 0 ? <Signin /> : <Init />}
        </div>
    );
} 