import React from 'react';
// import DatePicker from 'react-datepicker2';
import './styles.css';

const Agendamento = () => (
    <div id="agendamento">
        <div className="container-aux" id="aux-agend">
            <h1>Agendamento</h1>
            {/* <form action="*"> */}
                {/* <input type="text" name="name" id="name" placeholder="Seu nome"/>
                <input type="text" name="email" id="email" placeholder="Seu e-mail"/> */}
                <select>
                    <option value="">Serviço que deseja</option>
                    <option value="Barba">Barba</option>
                    <option value="Cabelo">Cabelo</option>
                </select>

                <select>
                    <option value="">Funcionário</option>
                    <option value="Arnaldo">Arnaldo</option>
                    <option value="Jéssica">Jéssica</option>
                    <option value="Edivan">Edivan</option>
                </select>
            {/* </form> */}
        </div>
    </div>
);

export default Agendamento;

