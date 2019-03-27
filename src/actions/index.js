import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../utils/routes.js';

// export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
// export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
// export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessage = createAction('MESSAGE_ADD');
export const changeChannelId = createAction('CHANNEL_ID_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const deleteChannel = createAction('CHANNEL_DELETE');

export const addMessageRequest = (text, currentChannelId, username) => async () => {
  try {
    const url = routes.messagesUrl(currentChannelId);
    await axios.post(url, { data: { attributes: { text, username } } });
  } catch (e) {
    throw new Error(e);
  }
};

export const addChannelRequest = text => async () => {
  try {
    const url = routes.channelsUrl();
    await axios.post(url, { data: { attributes: { name: text } } });
  } catch (e) {
    throw new Error(e);
  }
};

export const getMessagesSuccess = createAction('MESSAGES_GET_SUCCESS');
export const getMessagesRequest = currentChannelId => async (dispatch) => {
  try {
    const url = routes.messagesUrl(currentChannelId);
    const response = await axios.get(url);
    dispatch(getMessagesSuccess(response.data));
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteChannelRequest = id => async () => {
  try {
    const url = routes.channelUrl(id);
    await axios.delete(url);
  } catch (e) {
    throw new Error(e);
  }
};
