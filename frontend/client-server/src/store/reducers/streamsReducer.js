import _omit from 'lodash/omit';
import _mapKeys from 'lodash/mapKeys';

import {
  HANDLE_FETCH_STREAMS,
  HANDLE_FETCH_STREAM,
  HANDLE_CREATE_STREAM,
  HANDLE_EDIT_STREAM,
  HANDLE_DELETE_STREAM,
} from '../actions/types';


const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLE_FETCH_STREAMS:
      return { ...state, ..._mapKeys(action.payload.data, 'id') };
    case HANDLE_FETCH_STREAM:
    case HANDLE_CREATE_STREAM:
    case HANDLE_EDIT_STREAM:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case HANDLE_DELETE_STREAM:
      return _omit(state, action.payload.id);
    default:
      return state;
  }
};

export default streamsReducer;
