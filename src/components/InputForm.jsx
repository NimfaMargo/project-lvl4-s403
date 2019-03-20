import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    message: state.message,
  };
  return props;
};

const actionCreators = {
  addMessageRequest: actions.addMessageRequest,
};

class InputForm extends React.Component {
  handleMessage = async (values) => {
    const { addMessageRequest, reset } = this.props;
    try {
      await addMessageRequest(values);
    } catch (e) {
      throw new SubmissionError(e);
    }
    reset();
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <nav id="message-input">
      <form className="form-inline" onSubmit={handleSubmit(this.handleMessage)}>
        <div className="form-group mx-3">
          <Field className="form-control" disabled={submitting} name="text" required component="input" type="text" />
        </div>
        <input
          className="btn btn-primary btn-sm"
          disabled={submitting}
          type="submit"
          value="Add"
        />
      </form>
      </nav>
    );
  }
}
/* eslint react-redux/connect-prefer-named-arguments: 0 */
const ConnectedInputForm = connect(mapStateToProps, actionCreators)(InputForm);
export default reduxForm({
  form: 'newMessage',
})(ConnectedInputForm);
