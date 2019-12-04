import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Client from './pages/client';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* não permite que mais de uma rota seja executada ao mesmo tempo */}
                <Route path="/" exact component={Main} />
                <Route path="/client" component={Client} />
            </Switch>
        </BrowserRouter>
    );
}