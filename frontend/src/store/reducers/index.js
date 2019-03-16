import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

const [auth, form] = [authReducer, formReducer];
const reducers = combineReducers({ auth, form });

export default reducers;
