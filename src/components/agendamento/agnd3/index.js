import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

export default function Agnd3() {
    const [date, setDate] = useState(localStorage.getItem('date'));
    const [service, setService] = useState(localStorage.getItem('service'));
    const [employee, setEmployee] = useState(localStorage.getItem('employee'));

    // local

    async function confirm() {
        
        alert('Agendamento confirmado com sucesso!')

        const data = {
            client_id: 1,
            horary: '1830',
            date: '212121',
            employee_id: 3,
            service_id: 2
        }

        await api.post('/schedules', data);
    }

    return (
        <div className="container-aux" id="aux-agend">
            {/* <div> */}
                <p>Date: <span>{ date }</span></p>
                <p>Service: <span>{ service }</span></p>
                <p>Employee: <span>{ employee }</span></p>

                <button onClick={ confirm }>Confirmar agendamento</button>
            {/* </div> */}
        </div>
    )
}