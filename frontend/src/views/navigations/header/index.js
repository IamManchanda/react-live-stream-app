import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHeader = () => 
  <div className="top-bar shadow">
    <div className="top-bar-left">
      <ul className="dropdown menu">
        <li className="menu-text">Live Stream App</li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><Link to="/">All Streams</Link></li>
      </ul>
    </div>
  </div>;

export default NavigationHeader;
