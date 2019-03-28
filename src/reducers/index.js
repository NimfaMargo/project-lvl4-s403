import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
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
  [actions.deleteChannel](state, { payload: { id } }) {
    return state.filter(el => el.id !== id);
  },
}, []);

const currentChannelId = handleActions({
  [actions.changeChannelId](state, id) {
    return +id.payload;
  },
}, []);

const messages = handleActions({
  [actions.addMessage](state, message) {
    return [...state, message.payload];
  },
  [actions.getMessagesSuccess](state, { payload }) {
    return payload.map(el => _.pick(el, 'attributes').attributes);
  },
}, []);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
