import React from 'react';
import { Route } from 'react-router-dom';

import routesData from './data';

const Routes = () => 
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      { routesData.map(({ id, path, component }) => 
          <Route exact key={ id } path={ path } component={ component } /> ) }
    </div>
  </div>;

export default Routes;
