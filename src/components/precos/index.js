import React from 'react';

import './styles.css';

const Precos = () => (
    <div id="precos">
        <div className="flex">
            <div id="price-table">
                <h1>Tabela de preços</h1>
                <p>
                    Corte masculino.....................R$50,00<br></br>
                    Corte máquina.........................R$45,00<br></br>
                    Corte infantil..............................R$45,00
                </p>
                <p>
                    Barba tradicional....................R$45,00<br></br>
                    <span>(Barba à navalha com toalha quente ou fria e massagem facial)</span>
                </p>
                <p>
                    Combo corte+barba.............R$90,00<br/>
                    Combo máquina+barba.....R$90,00
                </p>
            </div>
        </div>
    </div>
);

export default Precos;