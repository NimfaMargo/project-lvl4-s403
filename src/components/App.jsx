import React from 'react';
import Sidebar from './Sidebar.jsx';
import MessagesList from './MessagesList.jsx';
import AddMessage from './AddMessage.jsx';

const App = () => (
  <div>
    <div className="row justify-content-around" style={{ height: '550px' }}>
      <div className="sidebar col-sm-12 col-md-3 col-xl-3" style={{ border: '3px solid #bddfd3' }}>
        <Sidebar/>
      </div>

      <div className="main d-flex flex-column col-sm-12 col-md-9 col-xl-9 mh-100" style={{ border: '3px solid #bddfd3' }}>
        <div className="col message-list overflow-auto bg-light align-self-stretch border m-2">
          <MessagesList />
        </div>
      </div>
    </div>
    <div className="row second-row" style={{ border: '3px solid #bddfd3' }}>
      <div className="col-sm-12 col-md-9 offset-md-3 input">
        <AddMessage />
      </div>
    </div>
  </div>

);
export default App;
