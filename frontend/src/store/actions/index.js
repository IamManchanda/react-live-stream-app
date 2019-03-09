/* Actions */

import { HANDLE_SIGN_IN, HANDLE_SIGN_OUT } from './types';

export const handleSignIn = () => {
  return {
    type: HANDLE_SIGN_IN,
  };
};

export const handleSignOut = () => {
  return {
    type: HANDLE_SIGN_OUT,
  };
};
