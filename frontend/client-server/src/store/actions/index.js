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

export const handleCreateStream = (formValues) => {
  return async function dispatcherCreateStream(dispatch) {
    const response = await streamsApi.post('/streams', formValues);
    const { data: streamsData } = response;
    dispatch({
      type: HANDLE_CREATE_STREAM,
      payload: { streamsData },
    });
  };
};

export const handleFetchStreams = () => async (dispatch) => {
  const response = await streamsApi.get('/streams');
  const { data: streamsData } = response;
  dispatch({
    type: HANDLE_FETCH_STREAMS,
    payload: { streamsData },
  });
};

export const handleFetchStream = (id) => async (dispatch) => {
  const response = await streamsApi.get(`/streams${id}`);
  const { data: streamData } = response;
  dispatch({
    type: HANDLE_FETCH_STREAM,
    payload: { streamData },
  });
};

export const handleEditStream = (id, formValues) => async (dispatch) => {
  const response = await streamsApi.put(`/streams${id}`, formValues);
  const { data: streamData } = response;
  dispatch({
    type: HANDLE_EDIT_STREAM,
    payload: { streamData },
  });
};

export const handleDeleteStream = (id) => async (dispatch) => {
  await streamsApi.delete(`/streams${id}`);
  const streamId = id;
  dispatch({
    type: HANDLE_DELETE_STREAM,
    payload: { streamId },
  });
};
