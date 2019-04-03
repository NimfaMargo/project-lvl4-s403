import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const errorMessage = handleActions({
  [actions.requestFailure](state, { payload: { error } }) {
    const { message } = error;
    return message;
  },
  [actions.requestSuccess]() {
    return 'none';
  },
  [actions.getMessagesSuccess]() {
    return 'none';
  },
}, 'none');

const channels = handleActions({
  [actions.addChannel](state, channel) {
    return [...state, channel.payload];
  },
  [actions.deleteChannel](state, { payload: { id } }) {
    return state.filter(el => el.id !== id);
  },
  [actions.renameChannel](state, { payload: { id, newName } }) {
    return state.map(el => (el.id === id ? { ...el, name: newName } : el));
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
  [actions.getMessagesSuccess](state, { payload: { data } }) {
    return data.map(el => _.pick(el, 'attributes').attributes);
  },
}, []);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  errorMessage,
  form: formReducer,
});
