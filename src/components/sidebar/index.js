import React from 'react' ;
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faMoneyBillAlt, faStoreAlt, faCalendarAlt, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div id="container-sidebar">
        <div id="sidebar">
            <ul>
               <a href="#espaco">
                   <li>
                        <FontAwesomeIcon icon={faStoreAlt} className="ico"/>
                        <p className="text-li">Espaço</p>
                    </li>
                </a>
                <a href="#portfolio">
                    <li>
                        <FontAwesomeIcon icon={faCut} className="ico"/>
                        <p className="text-li">Portfólio</p>
                    </li>
                </a>
                <a href="#precos">
                    <li>
                        <FontAwesomeIcon icon={faMoneyBillAlt} className="ico"/>
                        <p className="text-li">Preços</p>
                    </li>
                </a>
                <a href="#agendamento">
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt} className="ico"/>
                        <p className="text-li">Agendamento</p>
                    </li>
                </a>
                <a href="#contato">
                    <li id="last-li">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="ico"/>
                        <p className="text-li">Contatos</p>
                    </li>
                </a>
            </ul>
        </div>
    </div>
);

export default Sidebar;