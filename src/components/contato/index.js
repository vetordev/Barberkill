import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Contato = () => (
    <div id="contato">
        <div className="container-aux" id="aux-port">
        {/* <div id="title"></div> */}
        <h1>Fale com a gente!</h1>
            <div id="rowaa">
                <form action="*">
                    <input type="text" name="name" id="name" placeholder="Seu nome"/>
                    <input type="text" name="email" id="email" placeholder="Seu e-mail"/>
                    <textarea placeholder="Sua dúvida, sugestão, elogio ou reclamação." name="msg" id="msg" cols="30" rows="10"></textarea> 
                    <button>Enviar</button>
                </form>
                <div id="social">
                    <div id="insta-logo"></div>
                    <div id="face-logo"></div>
                    <div id="yt-logo"></div>
                </div>
            </div>
            {/* <div id="container-contacts">
                <div id="facebook">
                    <div id="facebook-img"></div>
                    <p>@barberkill.ofc</p>
                </div>
                <div id="instagram">
                    <div id="instagram-img"></div>
                    <p>@barberkill</p>
                </div>
                <div id="whatsapp">
                    <div id="whatsapp-img"></div>
                    <p>(11) 94402-8922</p>
                </div>
            </div>
            <div id="container-address">
                <p>
                Praça Miguel Ortega, 135 - Parque Assunção, Taboão da Serra
                </p>
            </div> */}
        </div>
    </div>
);

export default Contato;

