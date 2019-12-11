import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import Client from '../../pages/client';

export default function Banner() {
    
    const [menu, setMenu] = useState('none');
    const [cli, setCli] = useState('');
    const [logo, setLogo] = useState('block');

    function stateClient() {
        const userState = localStorage.getItem('client_id');

        if (cli == ''){
            setCli(<Client />);
            setMenu('none');
            setLogo('none')
        }
        else {
            alert('Você precisa fazer login primeiro!')
            setCli('');
            setLogo('none');
        }
    }

    const logout = () => localStorage.clear(); 

    function stateMenu() {
        if (menu == 'none') {
            setMenu('block')
        }else setMenu('none');

    }

    return (
        <div id="banner">
                <div id="user-container">
                    <FontAwesomeIcon icon={faUserCircle} id="user-ico" onClick={stateMenu}/>    
                    <div id="user-menu" style={{display: menu}}>
                        <button className="btn-user-menu" id="line-separator" onClick={stateClient}>Minha conta</button>
                        <button className="btn-user-menu" onClick={logout}>Sair</button>
                    </div>
                    
                </div>
                {cli}
        </div>
    )
};

