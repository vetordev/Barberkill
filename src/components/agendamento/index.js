import React from 'react';

import './styles.css';
import Agnd1 from './agnd1';
import Agnd2 from './agnd2';
import Routes from './routes';
import api from '../../services/api';

const Agendamento = () => {
    
    const deleteSchedule = () => {

        const schedule_id = 9 //nao sei pegar

        api.delete(`/schedules/${schedule_id}`).then(() => alert('Agendamento excluído'));
        
    }
    const updatedSchedule = () => {
        const schedule_id = 9 //nao sei pegar

        const data = {
            client_id: 4,
            horary: '1830',
            date: '212121',
            employee_id: 4,
            service_id: 1,
            observation: 'cachorro'
        }

        api.put(`/schedules/${schedule_id}`, data).then(() => alert('Agendamento atualizado'));
    }
    return (
        <div id="agendamento">
            {/* <Agnd1 /> */}
            {/* <Agnd2 /> */}
            <Routes />
        </div>
    );
}

export default Agendamento;

