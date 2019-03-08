import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';

const App = () => <Fragment>
  <h1>Header</h1>
  <BrowserRouter>
    <Fragment>
      { routes.map(({ path, component }, index) => <Route
          exact
          key={ index }
          path={ path }
          component={ component }
        /> ) }
    </Fragment>
  </BrowserRouter>
</Fragment>;

export default App;
