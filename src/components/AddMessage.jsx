import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import Context from '../utils/context.js';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const actionCreators = {
  addMessageRequest: actions.addRequest,
};

class AddMessage extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleMessage = async (values) => {
    const { username } = this.context;
    const { text } = values;
    const {
      addMessageRequest,
      currentChannelId,
      reset,
    } = this.props;
    try {
      await addMessageRequest(text, currentChannelId, username);
    } catch (e) {
      throw new SubmissionError(e);
    }
    reset();
    this.textInput.current.focus();
  }

  render() {
    const { handleSubmit, submitting, submitFailed } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleMessage)}>
        {submitFailed ? <div className="alert alert-danger position-relative p-0 m-0"> Network Error! </div> : null}
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
      </form>
    );
  }
}

/* eslint react-redux/connect-prefer-named-arguments: 0 */
const ConnectedInputForm = connect(mapStateToProps, actionCreators)(AddMessage);
export default reduxForm({
  form: 'newMessage',
})(ConnectedInputForm);
