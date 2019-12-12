import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Agnd4() {

    return (
        <div className="container-aux agnd4" id="aux-agend">
            <p>Seu agendamento foi confirmado com sucesso!</p>
            <div id="confirm-icon"></div>
            <p>Não se esqueça de deixar marcado em sua agenda para não perder o dia e o horário!</p>
            <Link to="/">
                <button>Voltar ao início</button>
            </Link>
        </div>
    )
}