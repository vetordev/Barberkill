import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import Client from '../../pages/client';

export default function Banner() {
    
    const [cli, setCli] = useState('');
    const [ico, setIco] = useState('');

    // useEffect(() => {
    //     const login_cli = localStorage.getItem('client_id');

    //     if ( login_cli != null)

    // }, [])
    function stateClient() {
        
        const login_cli = localStorage.getItem('client_id');

        if (cli == '' && login_cli != '')
            setCli(<Client />)
        else setCli('');

    }

    return (
        <div id="banner">
                <FontAwesomeIcon icon={faUserCircle} id="user-ico" onClick={stateClient}/>
            {cli}
        </div>
    )
};

