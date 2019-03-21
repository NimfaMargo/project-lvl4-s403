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
        <div id='message-list'>
          <ul className="messages-list">
            {messages.length === 0 ? null : messages.map(({ id, text, username }) => (
             <li key={id}>({username}): {text}</li>
            ))}
          </ul>
        </div>);
  }
}

export default connect(mapStateToProps)(MessageList);
