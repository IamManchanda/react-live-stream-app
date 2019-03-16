import React from 'react';
import { Route } from 'react-router-dom';

import routesData from './routesData';

const Routes = () => 
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      { routesData.map(({ id, path, page: DynRoutedPage, ownProps = {} }) =>
          <Route exact key={ id } path={ path } 
            render={ (props = {}) => 
              <DynRoutedPage { ...props } { ...ownProps } /> } /> ) }
    </div>
  </div>;

export default Routes;
