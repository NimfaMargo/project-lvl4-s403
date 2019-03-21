import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');
export const addMessageResponse = createAction('MESSAGE_ADD_RESPONSE');

export const addMessageRequest = (text, currentChannelId, username) => async (dispatch) => {
  const url = `/api/v1/channels/${currentChannelId}/messages`;
  const response = await axios.post(url, { data: { attributes: { text, username } } });
  dispatch(addMessageResponse({ response }));
};

export const addMessage = createAction('MESSAGE_ADD');
