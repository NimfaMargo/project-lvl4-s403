import React from 'react';
import connect from '../utils/connect.js';

const mapStateToProps = (state) => {
  const { messages, currentChannelId } = state;
  return { messages, currentChannelId };
};

@connect(mapStateToProps)

class MessageList extends React.Component {
  render() {
    const { messages, currentChannelId } = this.props;
    // console.log(messages, currentChannelId);
    // console.log(messages.filter(el => console.log(el.channelId)))
    const filteredMessages = messages.filter(el => el.channelId === currentChannelId);
    return (
        <div className='messages w-100 pl-4 pr-4'>
            {filteredMessages.length === 0 ? null
              : filteredMessages.map(({ id, text, username }) => (
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
