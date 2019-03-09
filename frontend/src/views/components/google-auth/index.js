import React, { Component } from 'react';

import googleCredentials from '../../../config/google';

const GoogleAuth = class extends Component {
  state = {
    hasSignedInState: null,
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      const { clientId } = googleCredentials;
      const scope = 'email';
      window.gapi.client
        .init({ clientId, scope })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          const { isSignedIn } = this.auth;
          this.handleAuthChange();
          isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  handleAuthChange = () => {
    const hasSignedInState = this.auth.isSignedIn.get();
    this.setState({ hasSignedInState });
  };

  render() {
    const { hasSignedInState } = this.state;
    return (
      <button type="button" className="button radius bordered shadow social google">
        { (!hasSignedInState) ? <div>Login with Google</div> : <div>My Account</div> }
      </button>
    );
  }
};

export default GoogleAuth;
