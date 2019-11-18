import React from 'react';

import './styles.css';

const Espaco = () => (
    <div id="espaco">
        <div className="container-aux">
            <h1>Nosso espaço</h1>
            <div id="cell-container">
                <div id="part1">
                    <div className="cell cell1">
                        <div className="img-spc" id="img-1"></div>
                        <div className="info-spc">Um espaço exclusivamente masculino, para cuidar da barba, do cabelo e do bigode. Nosso espaço garante total conforto para os clientes, e acima de tudo o principal objetivo é recebe-los com o melhor atendimento possível.</div>
                    </div>
                    <div className="cell cell2">
                        <div className="info-spc">Na barbearia, o objetivo é cortar o cabelo e barbear de forma clássica e relaxar. Homens que valorizam um ambiente confortável, em uma atmosfera vintage, buscando não somente um corte bem feito, como uma experiência única.</div>
                        <div className="img-spc" id="img-2"></div>
                    </div>
                </div>
                <div id="part2">
                    <div className="cell cell1">
                        <div className="img-spc" id="img-3"></div>
                        <div className="info-spc">As barbearias passaram diversas gerações de homens à busca de um bom corte de cabelo, uma barba bem feita, boa conversa e bons amigos. Valorizamos esse espaços de cultura, entendendo todo o seu significado histórico, social e cultural.</div>
                    </div>
                    <div className="cell cell2">
                        <div className="info-spc">A Barberkill é o lugar certo para quem procura o melhor estilo! Nós reunimos profissionais antenados no mundo da moda para proporcionar aos nossos clientes os visuais mais modernos, com o melhor preço da região</div>
                        <div className="img-spc" id="img-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Espaco;