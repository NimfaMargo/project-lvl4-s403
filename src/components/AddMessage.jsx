import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../utils/connect.js';
import Context from '../utils/context.js';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newMessage' })

class AddMessage extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  componentDidUpdate() {
    this.textInput.current.focus();
  }

  handleMessage = async ({ text }) => {
    const { username } = this.context;
    const {
      addMessageRequest,
      currentChannelId,
      reset,
    } = this.props;
    await addMessageRequest(text, currentChannelId, username);
    reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form className="w-100 pl-2 pr-2" onSubmit={handleSubmit(this.handleMessage)}>
        <div className="input-group mt-2">
          <Field component={props => (
            <input
              {...props.input}
              ref={this.textInput}
              className="form-control"
              disabled={submitting}
              type="text"
              autoFocus
              required
            />)
          } name="text" required />
          <div className="input-group-append">
            <button className="btn btn-info btn-sm message" disabled={submitting} type="submit">Send</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddMessage;
