import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesData from './routesData';

const Routes = () => 
  <div className="grid-x grid-padding-x grid-padding-y">
    <div className="cell">
      <Switch>
        { routesData.map(function iterateRoutesData(item) {
            const { uuid, path, page: DynRoutedPage, ownProps = {} } = item;
            return (
              <Route exact key={ uuid } path={ path } 
                render={ (props = {}) => <DynRoutedPage { ...props } { ...ownProps } /> } 
              />
            );
          }) }
      </Switch>
    </div>
  </div>;

export default Routes;
