import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import routesData from './data';

const Routes = () => <Fragment>
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      <BrowserRouter>
        <Fragment>
          { routesData.map(({ id, path, component }) => <Route
              exact key={ id } path={ path } component={ component }
            /> ) }
        </Fragment>
      </BrowserRouter>
    </div>
  </div>
</Fragment>;

export default Routes;