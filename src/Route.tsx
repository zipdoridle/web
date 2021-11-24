import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SiginIn, Layout } from './Page';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Layout} />
        <Route exact path='/login' component={SiginIn} />
      </Switch>
    </BrowserRouter>
  );
}
