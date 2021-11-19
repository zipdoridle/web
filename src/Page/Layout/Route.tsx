import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main } from '../index';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/main' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
