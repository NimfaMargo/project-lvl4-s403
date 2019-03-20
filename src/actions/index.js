import { createAction } from 'redux-actions';
import axios from 'axios';

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessageRequest = ({ text }) => async (dispatch) => {
  const channelId = window.gon.currentChannelId;
  const url = `/api/v1/channels/${channelId}/messages`;
  const response = await axios.post(url, { data: { attributes: { text } } });
  dispatch(addMessageSuccess({ message: response.data }));
};
