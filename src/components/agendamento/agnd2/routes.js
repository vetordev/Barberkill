import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Init from './components/init';
import Signin from './components/signin';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* não permite que mais de uma rota seja executada ao mesmo tempo */}
                <Route path="/agnd2" exact component={Init} />
                <Route path="/agnd2/signin" component={Signin} />
            </Switch>
        </BrowserRouter>
    );
}