import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../utils/routes.js';

export const addMessage = createAction('MESSAGE_ADD');
export const changeChannelId = createAction('CHANNEL_ID_CHANGE');
export const addChannel = createAction('CHANNEL_ADD');
export const deleteChannel = createAction('CHANNEL_DELETE');
export const renameChannel = createAction('CHANNEL_RENAME');
export const requestFailure = createAction('REQUEST_FAILURE');
export const requestSuccess = createAction('REQUEST_SUCCESS');

export const addMessageRequest = (text, currentChannelId, username) => async (dispatch) => {
  try {
    const url = routes.messagesUrl(currentChannelId);
    await axios.post(url, { data: { attributes: { text, username } } });
    dispatch(requestSuccess());
  } catch (error) {
    dispatch(requestFailure({ error }));
    throw new Error(error);
  }
};

export const addChannelRequest = text => async (dispatch) => {
  try {
    const url = routes.channelsUrl();
    await axios.post(url, { data: { attributes: { name: text } } });
    dispatch(requestSuccess());
  } catch (error) {
    dispatch(requestFailure({ error }));
    throw new Error(error);
  }
};

export const getMessagesSuccess = createAction('MESSAGES_GET_SUCCESS');
export const getMessagesRequest = currentChannelId => async (dispatch) => {
  try {
    const url = routes.messagesUrl(currentChannelId);
    const response = await axios.get(url);
    dispatch(getMessagesSuccess(response));
  } catch (error) {
    dispatch(requestFailure({ error }));
    throw new Error(error);
  }
};

export const deleteChannelRequest = id => async (dispatch) => {
  try {
    const url = routes.channelUrl(id);
    await axios.delete(url);
    dispatch(requestSuccess());
  } catch (error) {
    dispatch(requestFailure({ error }));
    throw new Error(error);
  }
};

export const updateChannelRequest = (id, newName) => async (dispatch) => {
  try {
    const url = routes.channelUrl(id);
    await axios.patch(url, { data: { attributes: { name: newName } } });
    dispatch(requestSuccess());
  } catch (error) {
    dispatch(requestFailure({ error }));
    throw new Error(error);
  }
};
