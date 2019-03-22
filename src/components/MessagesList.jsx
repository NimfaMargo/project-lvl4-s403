import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { messages } = state;
  return { messages };
};

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
        <div className='messages'>
         <ul>
            {messages.length === 0 ? null : messages.map(({ id, text, username }) => (
             <div key={id} className='row message-base'>
               <div className='col-sm-10 col-md-10 message-text border m-1 '>
                <p>({username}): {text}</p>
               </div>
             </div>
            ))}
          </ul>
        </div>);
  }
}

export default connect(mapStateToProps)(MessageList);
