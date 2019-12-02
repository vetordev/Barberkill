import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../../services/api';

import Calendar from '../../calendar';
import Timer from '../../timer';


export default function Agnd1() {

    const [services, setServices] = useState([]);
    const [employees, setEmployees] = useState([]);
    
    const [serviceSelected, setServiceSelected] = useState('');
    const [employeeSelected, setEmployeeSelected] = useState('');
    const [link, setLink] = useState('');

    requiredDB();

     async function requiredDB() {
        const responseServices = await api.get('/services'); 
        setServices(responseServices.data);
    }

    async function handleServiceSelected(service) {
        setServiceSelected(service);
        localStorage.setItem('service', service);
        localStorage.setItem('employee', 'any');
        
        const serviceLocal = localStorage.getItem('service');
        const responseEmployees = await api.get('/services/employees', 
            { 
                headers: {'service': serviceLocal} 
            });
        
        if (serviceLocal != ''){
            setEmployees(responseEmployees.data.employees);
        }
    }
    
    function handleEmployeeSelected(employee) {
        setEmployeeSelected(employee);
        localStorage.setItem('employee', employee);
    }

    function goNext() {
        if (serviceSelected == '' || employeeSelected == ''){
            setLink('');
            alert('Preencha todos os campos corretamente.');
        }
        else setLink('/Agnd2');
    }

    return (
        <div className="container-aux" id="aux-agend" onLoad={ requiredDB }>
            <h1>Agendamento</h1>

                <select onClick={event => handleServiceSelected(event.target.value)}>
                    <option value="">Serviço que deseja</option>
                    {services.map(service => (
                        <option key={service.id} value={service.id}>
                            {service.service}
                        </option>
                    ))}
                </select>

                <select onClick={event => handleEmployeeSelected(event.target.value)}>
                    <option value="any" key="any">Qualquer Funcionário</option>
                    {employees.map(employee => (
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                    ))}
                </select>

                <div className="timer-container">
                    <Calendar />
                    <Timer />
                </div>
            <Link to={ link }>
                <button class="btn-smaller" onClick={ goNext }>Avançar</button>
            </Link>
        </div>
    );
};
