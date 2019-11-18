import React from 'react';

import './styles.css';

const Contato = () => (
    <div id="contato">
        <div className="container-aux" id="aux-port">
            <h1>Entre em contato</h1>
            {/* <form action="*"> */}
                <input type="text" name="name" id="name" placeholder="Seu nome"/>
                <input type="text" name="email" id="email" placeholder="Seu e-mail"/>
                <textarea placeholder="Sua dúvida, sugestão, elogio ou reclamação." name="msg" id="msg" cols="30" rows="10"></textarea>
            {/* </form> */}
        </div>
    </div>
);

export default Contato;