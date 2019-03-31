import React from 'react';
import Sidebar from './Sidebar.jsx';
import MessagesList from './MessagesList.jsx';
import AddMessage from './AddMessage.jsx';

const App = () => (
  <div className="row justify-content-around h-100">
    <div className="col-sm-12 col-md-4 col-xl-4 sidebar" style={{ background: '#136092d1' }}>
      <Sidebar/>
    </div>
    <div className="col-sm-12 col-md-8 col-xl-8 main p-0" >
      <div className="container h-100">
        <div className="row message-list overflow-auto bg-light" style={{ height: '550px', background: '#cbd9e663' }}>
          <MessagesList />
        </div>
        <div className="row bg-light" style={{ height: '55px', background: '#cbd9e663' }}>
          <AddMessage />
        </div>
      </div>
    </div>
  </div>
);
export default App;
