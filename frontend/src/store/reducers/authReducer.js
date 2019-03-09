/* Auth Reducer */

import INITIAL_AUTH_STATE from '../fixtures/auth';

const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case 'HANDLE_SIGN_IN':
      return { ...state, hasSignedInState: true };
    case 'HANDLE_SIGN_OUT':
      return { ...state, hasSignedInState: false };
    default:
      return state;
  }
};

export default authReducer;
