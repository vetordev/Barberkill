import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

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
    const [obs, setObs] = useState('-');

    const [btnCli, setBtnCli] = useState('');
    const [btnSche, setBtnSche] = useState('');

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

    function handleFieldsCli(content, field) {
        setBtnCli(<div className="btn-center"><button id="btn-update-cli" className="btn-save" onClick={ saveUpdatesCli }>Salvar</button></div>);

        switch(field) {
            case "name":
                setName(content);
                break;
            case "email":
                setEmail(content);
                break;
            case "cpf":
                setCpf(content);
                break;
            case "tel":
                setTel(content);
                break;
            case "cel":
                setCel(content);
                break;
        }

    }

    function handleFieldsShe(content, field) {
        setBtnCli(<div className="btn-center"><button className="btn-save" onClick={ saveUpdatesShe }>Salvar</button></div>);

        switch(field) {
            case "name":
                setName(content);
                break;
            case "email":
                setEmail(content);
                break;
            case "cpf":
                setCpf(content);
                break;
            case "tel":
                setTel(content);
                break;
            case "cel":
                setCel(content);
                break;
        }
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
                                <input type="text" id="name" name="name" className="input-client" value={ name } onChange={ event => handleFieldsCli(event.target.value, "name") }/>
                            </div>

                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input type="text" id="email" name="email" className="input-client" value={ email } onChange={ event => handleFieldsCli(event.target.value, "email") }/>
                            </div>

                            <div className="field">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" id="cpf" name="cpf" className="input-client" value={ cpf } onChange={ event => handleFieldsCli(event.target.value, "cpf") }/>
                            </div>

                            <div className="field">
                                <label htmlFor="tel">Telefone:</label>
                                <input type="text" id="tel" name="tel" className="input-client" value={ tel } onChange={ event => handleFieldsCli(event.target.value, "tel") }/>
                            </div>

                            <div className="field">
                                <label htmlFor="cel">Celular:</label>
                                <input type="text" id="cel" name="cel" className="input-client" value={ cel } onChange={ event => handleFieldsCli(event.target.value, "cel") }/>
                            </div>
                            { btnCli }
                        </div>
                    </div>

                    {/* <div id="schedules-data">
                        <p id="title">Seus agendamentos</p>
                        <div id="container-schedule">
                        { schedules.map(schedule => (
                            <>
                            <div className="field">
                                <label htmlFor="service">Serviço</label>
                                <input type="text" name="service" id="service" className="input-client" value={ schedule.services.service } onChange={ event => setService(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="service">Funcionário</label>
                                <input type="text" id="employee" className="input-client" value={ schedule.employees.name } onChange={ event => setEmployee(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="service">Data</label>
                                <input type="text" id="date" className="input-client" value={ schedule.date } onChange={ event => setDate(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="service">Horário</label>
                                <input type="text" id="horary" className="input-client" value={ schedule.horary } onChange={ event => setHorary(event.target.value) }/>
                            </div>

                            <div className="field">
                                <label htmlFor="service">Observações</label>
                                <input type="text" id="obs" className="input-client" value={ schedule.observation } onChange={ event => setObs(event.target.value) }/>
                            </div>
                            </>
                        )) } */}
                        
                        <button onClick={ saveUpdatesShe } className="btn-save">Salvar</button>

                        <div id="btn-random">
                        <button onClick={ destroyClient } id="btn-del">Excluir conta</button>
                        <button onClick={ logout } id="btn-logout"><FontAwesomeIcon icon={faPowerOff} className="ico"/></button>
                        </div>
                        </div>

                        {/* <FontAwesomeIcon icon={ faEdit } id="user-ico" onClick={stateClient}/> */}
                    </div>
    );


}