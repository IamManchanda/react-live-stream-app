/* Actions */

import { HANDLE_SIGN_IN, HANDLE_SIGN_OUT } from './types';

export const handleSignIn = (userId) => {
  return {
    type: HANDLE_SIGN_IN,
    payload: { userId },
  };
};

export const handleSignOut = () => {
  return {
    type: HANDLE_SIGN_OUT,
  };
};
