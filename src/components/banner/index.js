import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import Client from '../../pages/client';

export default function Banner() {
    
    const [cli, setCli] = useState('');

    function stateClient() {
        if (cli == '')
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

