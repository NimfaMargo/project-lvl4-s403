import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const defaultID = 1;

const errorMessage = handleActions({
  [actions.requestFailure](state, { payload: { error } }) {
    const { message } = error;
    return message;
  },
  [actions.requestSuccess]() {
    return 'none';
  },
}, 'none');

const channels = handleActions({
  [actions.addChannel](state, { payload: { attributes } }) {
    const { id } = attributes;
    return { ...state, [id]: attributes };
  },
  [actions.deleteChannel](state, { payload: { id } }) {
    return _.omit(state, id);
  },
  [actions.renameChannel](state, { payload: { id, newName } }) {
    return { ...state, [id]: { ...state[id], name: newName } };
  },
}, {});

const currentChannelId = handleActions({
  [actions.changeChannelId](state, { payload: { id } }) {
    return +id;
  },
}, defaultID);

const messages = handleActions({
  [actions.deleteChannel](state, { payload: { id } }) {
    return _.omit(state, id);
  },
  [actions.addMessage](state, { payload: { attributes } }) {
    const { id } = attributes;
    return { ...state, [id]: attributes };
  },
}, {});

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  errorMessage,
  form: formReducer,
});
