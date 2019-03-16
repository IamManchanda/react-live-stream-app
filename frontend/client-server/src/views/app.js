import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';

import NavigationHeader from './layouts/navigation-header';
import Routes from './routes';
import history from '../history';

const App = () =>
  <Router history={ history }>
    <Fragment>
      <NavigationHeader />
      <Routes />
    </Fragment>
  </Router>;

export default App;
