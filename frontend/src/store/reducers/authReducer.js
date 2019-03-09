/* Auth Reducer */

import INITIAL_AUTH_STATE from '../fixtures/auth';
import { HANDLE_SIGN_IN, HANDLE_SIGN_OUT } from '../actions/types';

const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case HANDLE_SIGN_IN:
    case HANDLE_SIGN_OUT:
      let userId, hasSignedInState;
      if (action.type === HANDLE_SIGN_IN) {
        [userId, hasSignedInState] = [action.payload.userId, true];
      } else if (action.type === HANDLE_SIGN_OUT) {
        [userId, hasSignedInState] = [null, false];
      }
      return { ...state, hasSignedInState, userId };
    default:
      return state;
  }
};

export default authReducer;
