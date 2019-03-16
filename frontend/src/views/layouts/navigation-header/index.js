import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../../components/google-auth'

const NavigationHeader = () => 
  <div className="top-bar shadow">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Live Stream App</li>
        <li><Link to="/">All Streams</Link></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><GoogleAuth /></li>
      </ul>
    </div>
  </div>;

export default NavigationHeader;
