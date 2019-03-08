import React, { Fragment } from 'react';

const NavigationHeader = () => <Fragment>
  <div className="top-bar shadow">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Live Stream App</li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li></li>
      </ul>
    </div>
  </div>
</Fragment>;

export default NavigationHeader;
