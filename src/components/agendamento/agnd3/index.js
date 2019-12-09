import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import BtnBack from '../components/btnBack';

import './styles.css';

export default function Agnd3({history}) {
    const date = localStorage.getItem('date');
    const horary = localStorage.getItem('horary');
    const service = localStorage.getItem('service');
    const employee = localStorage.getItem('employee');
    const client_id = localStorage.getItem('client_id');
    const employee_id = localStorage.getItem('employee_id');
    const service_id = localStorage.getItem('service_id');

    const [obs, setObs] = useState('');
    // const [confirm, setConfirm] = useState('');

    async function confirmSchedule() {

        const data = {
            client_id: client_id,
            horary: '1830',
            date: date,
            employee_id: employee_id,
            service_id: service_id,
            observation: obs
        }
        await api.post('/schedules', data);
    }
    

    return (
        <div className="container-aux" id="aux-agend">

                <div id="sche-review">
                    <p>Seu <span>{ service }</span> foi agendado para <span>{ date }</span> com <span>{ employee }</span>.</p>    
                </div>
                {/* <p>Date: <span>{ date }</span></p>
                <p>Service: <span>{ service }</span></p>
                <p>Employee: <span>{ employee }</span></p> */}
                
                {/* <label htmlFor="obs"></label> */} 
                <textarea id="text-agnd3"
                    name="obs" 
                    placeholder="Gostaria de adicionar alguma observação? Caso não, deixe em branco."
                    onChange={ event => setObs(event.target.value)}
                >
                    
                </textarea>

                <div>
                <Link to="/agnd4">
                    <button onClick={ confirmSchedule }>Confirmar agendamento</button>
                </Link>
                <BtnBack direction="/agnd1"/>
                </div>
        </div>
    )
}