import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../utils/routes.js';

// export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessageRequest = (text, currentChannelId, username) => async (dispatch) => {
  // dispatch(addMessageRequest());
  try {
    const url = routes.messagesUrl(currentChannelId);
    await axios.post(url, { data: { attributes: { text, username } } });
    // dispatch(addMessageSuccess(response));
  } catch (e) {
    dispatch(addMessageFailure());
    throw new Error(e);
  }
};

export const addChannelRequest = text => async (dispatch) => {
  // dispatch(addMessageRequest());
  try {
    const url = routes.channelsUrl();
    await axios.post(url, { data: { attributes: { name: text } } });
    // dispatch(addMessageSuccess(response));
  } catch (e) {
    dispatch(addMessageFailure());
    throw new Error(e);
  }
};

export const addMessage = createAction('MESSAGE_ADD');
export const addChannel = createAction('Channel_ADD');
