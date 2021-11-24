import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Main, Mypage, Profile, Post, Detail } from '../../Page';

export default function Router() {
  return (
    <Switch>
      <Route path='/main' component={Main} />
      <Route path='/detail' component={Detail} />
      <Route path='/mypage' component={Mypage} />
      <Route path='/profile' component={Profile} />
      <Route path='/post' component={Post} />
    </Switch>
  );
}
