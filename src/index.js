import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

import Channels from './Channels';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  <Channels channels={window.gon.channels}/>,
  document.getElementById('chat'),
);
