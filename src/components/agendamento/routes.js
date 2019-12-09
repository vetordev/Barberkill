import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Agnd1 from './agnd1';
import Agnd2 from './agnd2';
import Agnd3 from './agnd3';
import Agnd4 from './agnd4';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* não permite que mais de uma rota seja executada ao mesmo tempo */}
                <Route path="/" exact component={Agnd1} />
                <Route path="/agnd2" component={Agnd2} />
                <Route path="/agnd3" component={Agnd3} />
                <Route path="/agnd4" component={Agnd4} />
            </Switch>
        </BrowserRouter>
    );
}