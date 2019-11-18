import React from 'react';

import './styles.css';

const Portfolio = () => (
    <div id="portfolio">
        <div className="container-aux" id="aux-port">
            <h1>Portfólio</h1>
                <div id="images-port">
                    <div id="img1"></div>
                    <div id="img2"></div>
                    {/* <img src="./img/image1.png" alt=""/> */}
                </div>
            <button>Ver mais</button>
        </div>
    </div>
);

export default Portfolio;