import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const messages = handleActions({
  [actions.addMessageSuccess](state, { payload: { message } }) {
    return [...state, message];
  },
}, []);

export default combineReducers({
  messages,
  form: formReducer,
});
