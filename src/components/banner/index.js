import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Banner() {
    
    return (
        <div id="banner">
            <Link to="/client">
                <FontAwesomeIcon icon={faUserCircle} id="user-ico"/>
            </Link>
        </div>
    )
};

