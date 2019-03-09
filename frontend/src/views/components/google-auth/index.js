import React, { Component } from 'react';

import googleCredentials from '../../../config/google';

const GoogleAuth = class extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      const { clientId } = googleCredentials;
      console.log({ clientId });
      window.gapi.client.init({ clientId });
    });
  }

  render() {
    return (
      <button type="button" className="button radius bordered shadow social google">
        Login with Google
      </button>
    );
  }
};

export default GoogleAuth;
