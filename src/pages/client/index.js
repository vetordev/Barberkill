import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserSlash } from '@fortawesome/free-solid-svg-icons';

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
    const [cli, setCli] = useState('block')

    const destroyClient = () => {

        if (window.confirm("Deseja mesmo excluir sua conta?")){
            const client_id = localStorage.getItem('client_id');

            api.delete(`/clients/${client_id}`).then(() => {
                alert('Ficamos tristes por você ter nos deixado :(')
                localStorage.clear();
            });
        }else {
            return 'oi';
        }
    }
    

    useEffect(() => {
        async function loadInfoSche() {
            const clientLogin = localStorage.getItem('client_id');

            const responseInfo = await api.get(`/clients/${clientLogin}/schedules`);

            try {
                setName(responseInfo.data[0].clients.name);
                setEmail(responseInfo.data[0].clients.email);
                setCpf(responseInfo.data[0].clients.cpf);
                setTel(responseInfo.data[0].clients.telephone);
                setCel(responseInfo.data[0].clients.cellphone);

                setSchedules(responseInfo.data);
            }
            catch(error) {
                return false;
            }
            
            
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
        alert('Alterações salvas com sucesso!');
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
        setCli('none');
    }

    function justLetters(e){
        const letters = [" ", "ç","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

        if (letters.indexOf(e.key.toLowerCase()) == -1 && e.keyCode != 8 && e.keyCode != 46) e.preventDefault();
    }

    function justNumbers(e) {
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        if (numbers.indexOf(e.key.toLowerCase()) == -1 && e.keyCode != 46) e.preventDefault();
    }

    function justEmail(e) {
        const letters = ["ç", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z", "@", ".", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        if (letters.indexOf(e.key.toLowerCase()) == -1 && e.keyCode != 46) e.preventDefault()
    }

    return (
            <div id="clients" style={{display: cli}}>
                <div id="client-container">
                    <div id="personal-data">
                        <p id="title">Seus dados
                        <FontAwesomeIcon icon={faTimes} className="icon" id="close-client" onClick={closeClient} />
                        <FontAwesomeIcon icon={faUserSlash} className="icon" onClick={ destroyClient } />
                        </p>
                        <span>Clique para editar.</span>
                            <div id="container-personal">
                                <div className="field">
                                    <label htmlFor="name">Seu nome</label>
                                    <input type="text" id="name" name="name" className="input-client" value={ name } maxLength="100" required
                                        onChange={ event => handleFieldsCli(event.target.value, "name") }
                                        onKeyDown={ event => justLetters(event)}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="text" id="email" name="email" className="input-client" value={ email } maxLength="100" required
                                        onChange={ event => handleFieldsCli(event.target.value, "email") }
                                        onKeyDown={ event => justEmail(event)}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" id="cpf" name="cpf" className="input-client" value={ cpf } maxLength="8" required
                                        onChange={ event => handleFieldsCli(event.target.value, "cpf") }
                                        onKeyDown={ event => justNumbers(event)}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="tel">Telefone:</label>
                                    <input type="text" id="tel" name="tel" className="input-client" value={ tel } maxLength="8" required
                                        onChange={ event => handleFieldsCli(event.target.value, "tel") }
                                        onKeyDown={ event => justNumbers(event)}
                                    />

                                </div>

                                <div className="field">
                                    <label htmlFor="cel">Celular:</label>
                                    <input type="text" id="cel" name="cel" className="input-client" value={ cel } maxLength="8" required
                                        onChange={ event => handleFieldsCli(event.target.value, "cel") }
                                        onKeyDown={ event => justNumbers(event)}
                                    />
                                </div>
                                { btnCli }
                            </div>
                    </div>
                    <p id="title">Seus agendamentos</p>
                    <div id="schedules-data">
                    { schedules.map( schedule => 
                        <div className="sch" key={schedule.id}>
                            <p>Serviço: { schedule.services.service } </p>
                            <p>Profissional: { schedule.employees.name }</p>
                            <p>Data: { schedule.date }, às { schedule.horary }</p>
                            {/* <span></span> */}
                        </div>
                    )}
                    </div>

                    </div>
                </div>
            );

}