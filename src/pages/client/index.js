import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/sidebar';
import api from '../../services/api';

import './styles.css';

export default function Client() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [tel, setTel] = useState('');
    const [cel, setCel] = useState('');

    const [schedules, setSchedules] = useState([]);

    const [employee, setEmployee] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [horary, setHorary] = useState('');
    const [obs, setObs] = useState('');


    const destroyClient = () => {

        const client_id = localStorage.getItem('client_id');

        api.delete(`/clients/${client_id}`).then(() => {
             alert('User removed')
             localStorage.clear();
        });
    }
    const logout = () => localStorage.clear();    

    useEffect(() => {
        async function loadInfoSche() {
            const clientLogin = localStorage.getItem('client_id');

            const responseInfo = await api.get(`/clients/${clientLogin}/schedules`);

            // console.log(responseInfo.data[0].clients.name);
            setName(responseInfo.data[0].clients.name);
            setEmail(responseInfo.data[0].clients.email);
            setCpf(responseInfo.data[0].clients.cpf);
            setTel(responseInfo.data[0].clients.telephone);
            setCel(responseInfo.data[0].clients.cellphone);

            setSchedules(responseInfo.data);
            
        }

        loadInfoSche();
    }, []);

    async function saveUpdatesCli() {
        const clientLogin = localStorage.getItem('client_id');

        const data = {
            email: email,
            name: name,
            cpf: cpf,
            telephone: tel,
            cellphone: cel,
        }

        await api.put(`/clients/${clientLogin}`, data);
    }

    async function saveUpdatesShe() {

        // const data = {
        //     date: ,
        //     horary: ,
        //     observation: ,
        //     client: ,
        //     employee: ,
        //     service: ,
            
        // }

        // const clientLogin = localStorage.getItem('client_id');


        // await api.put(`/clients/${clientLogin}/schedules`)
    }

    return (
            <div id="clients">
                <div id="client-container">
                    <div id="personal-data">
                    <p id="title">Seus dados</p>

                        <div id="container-personal">
                            <div className="field">
                                <label htmlFor="name">Seu nome</label>
                                <input type="text" id="name" name="name" className="input-client" value={ name } onChange={ event => setName(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" id="email" name="email" className="input-client" value={ email } onChange={ event => setEmail(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" id="cpf" name="cpf" className="input-client" value={ cpf } onChange={ event => setCpf(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="tel">Telefone:</label>
                                <input type="text" id="tel" name="tel" className="input-client" value={ tel } onChange={ event => setTel(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="cel">Celular:</label>
                                <input type="text" id="cel" name="cel" className="input-client" value={ cel } onChange={ event => setCel(event.target.value) }/>
                            </div>
                        <div className="btn-center"><button id="btn-update-cli" onClick={ saveUpdatesCli }>Salvar</button></div>
                        </div>
                    </div>

                    <div id="schedules-data">
                        { schedules.map(schedule => (
                            <>
                            <input type="text" id="service" className="input-client" value={ schedule.services.service } onChange={ event => setService(event.target.value) }/>
                            <input type="text" id="employee" className="input-client" value={ schedule.employees.name } onChange={ event => setEmployee(event.target.value) }/>
                            <input type="text" id="date" className="input-client" value={ schedule.date } onChange={ event => setDate(event.target.value) }/>
                            <input type="text" id="horary" className="input-client" value={ schedule.horary } onChange={ event => setHorary(event.target.value) }/>
                            <input type="text" id="obs" className="input-client" value={ schedule.observation } onChange={ event => setObs(event.target.value) }/>
                            </>
                        )) }

                        {/* <FontAwesomeIcon icon={ faEdit } id="user-ico" onClick={stateClient}/> */}
                        <button onClick={ saveUpdatesShe }>Salvar</button>
                        <button onClick={ destroyClient }>Deletar um cliente</button>
                        <button onClick={ logout }>Logout</button>
                    </div>
                </div>
            </div>
    );


}