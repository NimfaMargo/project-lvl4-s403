import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { errorMessage } = state;
  return { errorMessage };
};
@connect(mapStateToProps)

class ErrorAlert extends React.Component {
  render() {
    const { errorMessage } = this.props;
    if (errorMessage !== 'none') {
      return (
        <Alert variant="danger">
          <p style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            You got an error: {errorMessage}! Check your internet connection and try again!
          </p>
        </Alert>
      );
    }
    return null;
  }
}

export default ErrorAlert;
