import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Calendar from '../../calendar';
import Timer from '../../timer';


export default function Agnd1 () {
    const [service, setService] = useState('');
    const [employee, setEmployee] = useState('');
    const [link, setLink] = useState('');

    function handleService(service) {
        setService(service);
        localStorage.setItem('service', service);
    }
    
    function handleEmployee(employee) {
        setEmployee(employee);
        localStorage.setItem('employee', employee);
    }

    function goNext() {
        if (service == '' || employee == ''){
            setLink('');
            alert('Preencha todos os campos corretamente.');
        }
        else setLink('/Agnd2');
    }

    return (
        <div className="container-aux" id="aux-agend">
            <h1>Agendamento</h1>
                <select onClick={event => handleService(event.target.value)}>
                    <option value="">Serviço que deseja</option>
                    <option value="Barba">Barba</option>
                    <option value="Cabelo">Cabelo</option>
                </select>

                <select onClick={event => handleEmployee(event.target.value)}>
                    <option value="">Funcionário</option>
                    <option value="Arnaldo">Arnaldo</option>
                    <option value="Jéssica">Jéssica</option>
                    <option value="Edivan">Edivan</option>
                </select>
                <div className="timer-container">
                    <Calendar />
                    <Timer />
                </div>
            <Link to={ link }>
                <button class="btn-smaller" onClick={ goNext }></button>
            </Link>
        </div>
    );
};
