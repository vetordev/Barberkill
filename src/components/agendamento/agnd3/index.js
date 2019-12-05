import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

export default function Agnd3() {
    const date = localStorage.getItem('date');
    const service = localStorage.getItem('service');
    const employee = localStorage.getItem('employee');
    const client_id = localStorage.getItem('client_id');
    const employee_id = localStorage.getItem('employee_id');
    const service_id = localStorage.getItem('service_id');
    const [obs, setObs] = useState('');

    async function confirmSchedule() {
        
        alert('Agendamento confirmado com sucesso!')

        const data = {
            client_id: client_id,
            horary: '1830',
            date: '212121',
            employee_id: employee_id,
            service_id: service_id,
            observation: obs
        }
        console.log(data);
        await api.post('/schedules', data);
    }

    // async function storageSchedule() {
    //     const responseSch = await api.get('/schedules');
        
    // }
    

    return (
        <div className="container-aux" id="aux-agend">
                <p>Date: <span>{ date }</span></p>
                <p>Service: <span>{ service }</span></p>
                <p>Employee: <span>{ employee }</span></p>
                
                {/* <label htmlFor="obs"></label> */}
                <textarea 
                    name="obs" 
                    placeholder="Gostaria de adicionar alguma observação? Caso não, deixe em branco."
                    onChange={ event => setObs(event.target.value)}
                >
                    
                </textarea>
                <button onClick={ confirmSchedule }>Confirmar agendamento</button>
        </div>
    )
}