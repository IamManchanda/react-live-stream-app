import { 
  HANDLE_SIGN_IN, 
  HANDLE_SIGN_OUT, 
  HANDLE_CREATE_STREAM,
  HANDLE_FETCH_STREAMS,
  HANDLE_FETCH_STREAM,
  HANDLE_EDIT_STREAM,
  HANDLE_DELETE_STREAM,
} from './types';
import streamsApi from '../../api/streams';
import history from '../../history';

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

export const handleFetchStreams = () => async (dispatch) => {
  const response = await streamsApi.get('/streams');
  const { data } = response;
  dispatch({
    type: HANDLE_FETCH_STREAMS,
    payload: { data },
  });
};

export const handleFetchStream = (id) => async (dispatch) => {
  const response = await streamsApi.get(`/streams/${id}`);
  const { data } = response;
  dispatch({
    type: HANDLE_FETCH_STREAM,
    payload: { data },
  });
};

export const handleCreateStream = (formValues) => {
  return async function dispatcherCreateStream(dispatch, getState) {
    const { userId } = getState().auth;
    const response = await streamsApi.post('/streams', { ...formValues, userId });
    const { data } = response;
    dispatch({
      type: HANDLE_CREATE_STREAM,
      payload: { data },
    });
    history.push('/');
  };
};

export const handleEditStream = (id, formValues) => async (dispatch) => {
  const response = await streamsApi.patch(`/streams/${id}`, formValues);
  const { data } = response;
  dispatch({
    type: HANDLE_EDIT_STREAM,
    payload: { data },
  });
  history.push('/');
};

export const handleDeleteStream = (id) => async (dispatch) => {
  await streamsApi.delete(`/streams/${id}`);
  dispatch({
    type: HANDLE_DELETE_STREAM,
    payload: { id },
  });
  history.push('/');
};
