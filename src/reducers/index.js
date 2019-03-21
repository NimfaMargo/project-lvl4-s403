import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
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
