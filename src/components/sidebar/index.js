import React from 'react' ;
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div id="container-sidebar">
        <div id="sidebar">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faCut}/>
                    <p className="text-li">Espaço</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCut}/>
                    <p className="text-li">Portfólio</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCut}/>
                    <p className="text-li">Preços</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCut}/>
                    <p className="text-li">Agendamento</p>
                </li>
                <li id="last-li">
                    <FontAwesomeIcon icon={faCut}/>
                    <p className="text-li">Contatos</p>
                </li>
            </ul>
        </div>
    </div>
);

export default Sidebar;