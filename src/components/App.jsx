import React from 'react';
import Sidebar from './Sidebar.jsx';
import MessagesList from './MessagesList.jsx';
import AddMessage from './AddMessage.jsx';

const App = () => (
  <div id="container">
    <Sidebar/>
      <MessagesList />
      <AddMessage />
  </div>
);
export default App;
