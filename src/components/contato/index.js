import React, { useState } from 'react';

import api from '../../services/api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Contato () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    async function sendEmail() {
        const data = {
            from: name + ' <' + email + '>',
            subject: subject,
            text: text
        }

        alert("Aguarde um instante...")
        await api.post('/mail', data);
        alert("E-mail enviado com sucesso!")
    }

    function justLetters(e){
        const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

        if (letters.indexOf(e.key.toLowerCase()) == -1) e.preventDefault()
    }

    return (
        <div id="contato">
            <div className="container-aux" id="aux-port">
            {/* <div id="title"></div> */}
            <h1>Fale com a gente!</h1>
                <div id="rowaa">
                    <div id="form">
                        <input type="text" name="name" id="name" placeholder="Seu nome" 
                            onChange={ event => setName(event.target.value) } 
                            onKeyDown={ event => justLetters(event)}
                        />
                        <input type="text" name="email" id="email" placeholder="Seu e-mail" 
                            onChange={ event => setEmail(event.target.value) } 
                            onKeyDown={ event => justLetters(event)}
                        />
                        <input type="text" name="subject" id="subject" placeholder="Assunto" 
                            onChange={ event => setSubject(event.target.value) }
                            onKeyDown={ event => justLetters(event)}
                        />
                        <textarea placeholder="Sua dúvida, sugestão, elogio ou reclamação." name="msg" id="msg" cols="30" rows="10" onChange={ event => setText(event.target.value) } /> 
                        <button onClick={ sendEmail }>Enviar</button>
                    </div>
                    <div id="social">
                        <div id="insta-logo"></div>
                        <div id="face-logo"></div>
                        <div id="yt-logo"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

