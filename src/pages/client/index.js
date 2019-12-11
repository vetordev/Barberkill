import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

import './styles.css';

export default function Client() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [tel, setTel] = useState('');
    const [cel, setCel] = useState('');

    const [schedules, setSchedules] = useState([]);

    // const [employee, setEmployee] = useState('');
    // const [service, setService] = useState('');
    // const [date, setDate] = useState('');
    // const [horary, setHorary] = useState('');
    // const [obs, setObs] = useState('-');

    const [btnCli, setBtnCli] = useState('');
    

    const destroyClient = () => {

        const client_id = localStorage.getItem('client_id');

        api.delete(`/clients/${client_id}`).then(() => {
             alert('Ficamos tristes por você ter nos deixado :(')
             localStorage.clear();
        });
    }
    

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

    function closeClient() {
        
    }

    return (
            <div id="clients">
                <div id="client-container">
                    <div id="personal-data">
                        <p id="title">Seus dados
                        <FontAwesomeIcon icon={faTimes} id="close-client" onClick={closeClient}/>
                        </p>
                        <span>Clique para editar.</span>
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
                    <p id="title">Seus agendamentos</p>
                    { schedules.map( schedule => 
                        <div id="sch">
                            <p>Serviço: { schedule.services.service } </p>
                            <p>Profissional: { schedule.employees.name }</p>
                            <p>Data: { schedule.date }, às { schedule.horary }</p>
                        </div>
                    )}

                        <div id="btn-random">
                            <button onClick={ destroyClient } id="btn-del">Excluir conta</button>
                        </div>
                    </div>
                </div>
            );

}