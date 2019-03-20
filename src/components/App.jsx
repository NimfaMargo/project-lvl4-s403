import React from 'react';
import Channels from './Channels.jsx';
import MessageList from './MessageList.jsx';
import InputForm from './InputForm.jsx';

const App = () => (
  <div>
    <Channels channels={window.gon.channels}/>
    <MessageList />
    <InputForm />
  </div>
);
export default App;
