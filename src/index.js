import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import gon from 'gon';
import faker from 'faker';
import { addMessage } from './actions';
import reducers from './reducers';
import App from './components/App.jsx';
import Context from './utils/context.js';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const getUserName = () => {
  const currentUserName = Cookies.get('userName');
  const randomUserName = faker.name.findName();
  if (currentUserName) {
    return currentUserName;
  }
  Cookies.set('userName', randomUserName);
  return Cookies.get('userName');
};

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const preloadedState = gon;
const store = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

const client = io({
  transports: ['websocket', 'polling', 'flashsocket'],
});

client.on('connect', () => {
  client.on('newMessage', ({ data }) => store.dispatch(addMessage(data.attributes)));
});


const username = getUserName();

render(
  <Provider store={store}>
    <Context.Provider value={{ username }}>
      <App />
    </Context.Provider>
  </Provider>,
  document.getElementById('chat'),
);

export default Context;
