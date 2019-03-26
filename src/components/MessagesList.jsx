import React from 'react';
import connect from '../utils/connect.js';

const mapStateToProps = (state) => {
  const { messages } = state;
  return { messages };
};

@connect(mapStateToProps)

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
        <div className='messages w-100 pl-4 pr-4'>
            {messages.length === 0 ? null : messages.map(({ id, text, username }) => (
             <div key={id} className='row message-base'>
               <div className='col-sm-12 col-md-12 message-text border rounded m-1 bg-white'>
                <p style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>({username}): {text}</p>
               </div>
             </div>
            ))}
        </div>);
  }
}

export default MessageList;
