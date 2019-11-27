import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Calendar from '../../calendar';
import Timer from '../../timer';


const Agnd1 = () => (
    
    <div className="container-aux" id="aux-agend">
        <h1>Agendamento</h1>
            <select>
                <option value="">Serviço que deseja</option>
                <option value="Barba">Barba</option>
                <option value="Cabelo">Cabelo</option>
            </select>

            <select>
                <option value="">Funcionário</option>
                <option value="Arnaldo">Arnaldo</option>
                <option value="Jéssica">Jéssica</option>
                <option value="Edivan">Edivan</option>
            </select>
            <div className="timer-container">
                <Calendar />
                <Timer />
            </div>
        <Link to="/agnd2">
            <button class="btn-smaller">Avançar</button>
        </Link>
    </div>
);

export default Agnd1;