import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SiginIn, Layout } from './Page';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SiginIn} />
        <Route exact path='/main' component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}
