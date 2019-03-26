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

  handleMessage = async ({ text }) => {
    const { username } = this.context;
    const {
      addMessageRequest,
      currentChannelId,
      reset,
    } = this.props;
    await addMessageRequest(text, currentChannelId, username);
    reset();
    this.textInput.current.focus();
  }

  render() {
    const { handleSubmit, submitting, submitFailed } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleMessage)}>
        <div className="input-group m-2">
          <Field component={props => (
            <input
              {...props.input}
              ref={this.textInput}
              className="form-control mx-2"
              disabled={submitting}
              type="text"
              autoFocus
            />)
          } name="text" />
          <button className="btn btn-primary btn-sm" disabled={submitting} type="submit">Send</button>
        </div>
        {submitFailed ? <div className="alert alert-danger position-relative p-0 m-0"> Please, check your internet connection!</div> : null}
      </form>
    );
  }
}

export default AddMessage;
