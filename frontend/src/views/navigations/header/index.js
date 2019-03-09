import React from 'react';
import { Link } from 'react-router-dom';

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
        <li>
          <button type="button" className="button radius bordered shadow social google">
            Login with Google
          </button>
        </li>
      </ul>
    </div>
  </div>;

export default NavigationHeader;
