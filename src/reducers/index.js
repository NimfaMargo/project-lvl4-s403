import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

// const messageAddingState = handleActions({
//   [actions.addMessageRequest]() {
//     return 'requested';
//   },
//   [actions.addMessageFailure]() {
//     return 'failed';
//   },
//   [actions.addMessageSuccess]() {
//     return 'finished';
//   },
// }, 'none');

const channels = handleActions({
  [actions.addChannel](state, channel) {
    return [...state, channel.payload];
  },
}, []);

const currentChannelId = handleActions({
}, []);

const messages = handleActions({
  [actions.addMessage](state, message) {
    return [...state, message.payload];
  },
}, []);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
