import React, {useState} from 'react';

import './styles.css';

import Client from '../../../pages/client';

export default function userMenu() {

    // const [cli, setCli] = useState('');
    const [oi, setoi] = useState('ola');

    function stateClient() {
        
        // if (cli == ''){
        //     setCli(<Client />) 
        // }
        // else setCli('');
    }

    const logout = () => localStorage.clear();   

    return (
        <div>
        <div id="user-menu">
            <button className="btn-user-menu" id="line-separator" onClick={stateClient}>Minha conta</button>
            <button className="btn-user-menu" onClick={logout}>Sair</button>
        </div>
        {/* {cli} */}
        </div>
    )
}