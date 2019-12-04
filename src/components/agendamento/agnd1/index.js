import React, { useState, useEffect } from 'react';
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


    useEffect(() => {
        async function requiredServices() {
            const responseServices = await api.get('/services'); 
            setServices(responseServices.data);
        }
    
        requiredServices();
    }, [])
    

    function handleServiceSelected(service) {
        setServiceSelected(service);
        localStorage.setItem('service_id', service);
        localStorage.setItem('employee_id', 'any');

        defineEmployeesList();
    }

    async function defineEmployeesList() {
        const serviceLocal = localStorage.getItem('service_id');

        if (serviceLocal != ''){
            // pegar employees que realizam o serviço com id especificado
            const responseEmployees = await api.get(`/services/${serviceLocal}/employees`);
            setEmployees(responseEmployees.data[0].employees);

            // pegar o nome do serviço com id especificado
            const responseServiceName = await api.get(`/services`);
            responseServiceName.data.forEach(service => {
                if (service.id == serviceLocal) 
                    localStorage.setItem('service', service.service);
            })
        }
    }

    function handleEmployeeSelected(employee) {
        setEmployeeSelected(employee);
        localStorage.setItem('employee_id', employee);

        defineEmployeeName();
    }

    async function defineEmployeeName() {
        const employeeLocal = localStorage.getItem('employee_id');

        if (employeeLocal != 'any') {

            const responseEmployeeName = await api.get('/employees');
            responseEmployeeName.data.forEach(employee => {
                if (employee.id == employeeLocal)
                    localStorage.setItem('employee', employee.name);
            })
        }
    }

    function goNext() {

        const loginState = localStorage.getItem('client_id');

        // console.log(loginState);
        if (serviceSelected == '' || employeeSelected == ''){
            setLink('');
            alert('Preencha todos os campos corretamente.');
        }
        // else if ()
        else {
            if (loginState == null){
                // alert(loginState);
                setLink('/Agnd2');
            }
            else setLink('/Agnd3');
        }
    }

    return (
        <div className="container-aux" id="aux-agend">
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
