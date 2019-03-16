import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavigationHeader from './layouts/navigation-header';
import Routes from './routes';

const App = () =>
  <BrowserRouter>
    <Fragment>
      <NavigationHeader />
      <Routes />
    </Fragment>
  </BrowserRouter>;

export default App;
