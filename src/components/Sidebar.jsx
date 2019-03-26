import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../utils/connect.js';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })

class Channels extends React.Component {
  handleChannel = async ({ text }) => {
    const {
      addChannelRequest,
      reset,
    } = this.props;
    await addChannelRequest(text);
    reset();
  }

  render() {
    const { channels, submitting, handleSubmit } = this.props;

    return (
        <div >
          <div className="sidebar-header mt-3">
              <h4 className='text-center text-white'>Channels</h4>
          </div>
          <form onSubmit={handleSubmit(this.handleChannel)}>
            <div className="input-group m-2">
              <Field component='input' className="form-control" disabled={submitting} type="text" name="text" />
              <div className="input-group-append">
                <button className="btn btn-info btn-sm" disabled={submitting} type="submit">Add</button>
              </div>
            </div>
          </form>
          <ul className="list-group align-items-left m-3">
            {channels.map(({ id, name }) => (
              <li key={id} className="list-group m-2">
                <a className='text-white' href="#">{name}</a>
              </li>
            ))}
          </ul>
        </div>);
  }
}

export default Channels;
