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
        <div className='messages'>
         <ul>
            {messages.length === 0 ? null : messages.map(({ id, text, username }) => (
             <div key={id} className='row message-base'>
               <div className='col-sm-10 col-md-10 message-text border m-1 '>
                <p style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>({username}): {text}</p>
               </div>
             </div>
            ))}
          </ul>
        </div>);
  }
}

export default MessageList;
