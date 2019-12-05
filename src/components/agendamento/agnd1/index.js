import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Calendar from '../../calendar';
import Timer from '../../timer';


export default function Agnd1() {
    const [service, setService] = useState(''); 
    // const [service, setService] = useState(''); 

    function handleService(service) {
        setService(service);
        localStorage.setItem("service", service);
    }

    function validNext() {
        var seviceValue = localStorage.getItem("service");

        // if (service == "") return false;
    }

    return (
        <div className="container-aux" id="aux-agend">
            <h1>Agendamento</h1>
                <select onClick={ event => handleService(event.target.value)}>
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
                <button class="btn-smaller" onClick={ validNext }>Avançar</button>
            </Link>
        </div>
    );
};
