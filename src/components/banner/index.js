import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

// import userMenu from './components/userMenu';

// import componentss from './'

export default function Banner() {
    
    const [menu, setMenu] = useState('');

    function stateMenu() {
        // if (menu == '') {
        //     setMenu(<userMenu />)
        // }else setMenu('');

    }

    return (
        <div id="banner">
                <div id="user-container">
                    <FontAwesomeIcon icon={faUserCircle} id="user-ico" onClick={stateMenu}/>
                    {menu}
                </div>
            {menu}
        </div>
    )
};

