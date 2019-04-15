import React from 'react';
import connect from '../utils/connect.js';
import { currentMessagesSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    messages: currentMessagesSelector(state),
  };
  return props;
};

@connect(mapStateToProps)

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'auto' });
  }

  renderMessages = () => {
    const { messages } = this.props;
    if (messages.length === 0) {
      return null;
    }
    return (messages.map(({ id, text, username }) => (
     <div key={id} id='newMessage' className='row message-base'>
       <div className='col-sm-12 col-md-12 message-text border rounded mb-1 bg-white'>
        <p className="text-wrap">({username}): {text}</p>
       </div>
     </div>))
    );
  }

  render() {
    return (
      <div className='messages w-100 pl-4 pr-4'>
        {this.renderMessages()}
        <div ref={this.messagesEnd} />
      </div>);
  }
}

export default MessageList;
