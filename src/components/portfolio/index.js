import React from 'react';

import './styles.css';

const Portfolio = () => (
    <div id="portfolio">
        <div className="container-aux" id="aux-port">
            <h1>Portfólio</h1>
                <div id="images-port">
                    <div className="row">
                        <div id="img1"></div>
                        <div id="img2"></div>
                        <div id="img3"></div>
                        <div id="img4"></div>
                        <div id="img5"></div>
                    </div>
                    <div className="row">
                        <div id="img6"></div>
                        <div id="img7"></div>
                        <div id="img8"></div>
                        <div id="img9"></div>
                        <div id="img10"></div>
                    </div>
                    {/* <img src="./img/image1.png" alt=""/> */}
                </div>
        </div>
    </div>
);

export default Portfolio;