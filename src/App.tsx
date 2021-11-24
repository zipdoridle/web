import React from 'react';

import Router from './Route';
import Global from './Global';

const App = () => {
  return (
    <React.Fragment>
      <Global />
      <Router />
    </React.Fragment>
  );
};

export default App;
