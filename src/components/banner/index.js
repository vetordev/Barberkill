import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Banner = () => (
    <div id="banner">
        <FontAwesomeIcon icon={faUserCircle} id="user-ico"/>
        <div id="logo"></div>
    </div>
);

export default Banner;
