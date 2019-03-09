import React, { Component } from 'react';

const GoogleAuth = class extends Component {
  render() {
    return (
      <button type="button" className="button radius bordered shadow social google">
        Login with Google
      </button>
    );
  }
};

export default GoogleAuth;
