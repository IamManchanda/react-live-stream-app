import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

const [auth, form, streams] = [authReducer, formReducer, streamsReducer];
const reducers = combineReducers({ auth, form, streams });

export default reducers;
