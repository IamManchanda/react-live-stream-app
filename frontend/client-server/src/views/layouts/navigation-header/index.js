import React from 'react';

import GoogleAuth from '../../components/google-auth'

const NavigationHeader = () => 
  <div className="top-bar shadow">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Live Stream App</li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><GoogleAuth /></li>
      </ul>
    </div>
  </div>;

export default NavigationHeader;
