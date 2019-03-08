import React from 'react';
import { Route } from 'react-router-dom';

import routesData from './data';

const Routes = () => 
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      { routesData.map(({ id, path, component: DynRouteComponent, extraProps = {} }) =>
          <Route exact key={ id } path={ path } render={ (props = {}) => 
            <DynRouteComponent { ...props } { ...extraProps } /> } /> ) }
    </div>
  </div>;

export default Routes;
