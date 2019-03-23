import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addRequest = (text, currentChannelId, username) => async (dispatch) => {
  // dispatch(addMessageRequest());
  try {
    const url = `/api/v1/channels/${currentChannelId}/messages`;
    await axios.post(url, { data: { attributes: { text, username } } });
    // dispatch(addMessageSuccess(response));
  } catch (e) {
    dispatch(addMessageFailure());
    throw new Error(e);
  }
};

export const addMessage = createAction('MESSAGE_ADD');
