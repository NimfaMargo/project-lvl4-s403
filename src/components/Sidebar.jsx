import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import cn from 'classnames';
import connect from '../utils/connect.js';
import RenameChannelModal from './RenameChannelModal.jsx';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })

class Channels extends React.Component {
  handleClickOnChannel = (e) => {
    e.preventDefault();
    const { getMessagesRequest, changeChannelId, currentChannelId } = this.props;
    const { id } = e.target;
    return currentChannelId === id ? null : changeChannelId(id) && getMessagesRequest(id);
  }

  handleRemoveChannel = id => async () => {
    const { deleteChannelRequest } = this.props;

    /* eslint-disable no-restricted-globals, no-alert */
    const confirmationResult = confirm('Do you want to delete this channel?');
    /* eslint-enable */

    if (confirmationResult) {
      await deleteChannelRequest(id);
      return true;
    }
    return false;
  }

  handleAddChannel = async ({ text }) => {
    const { addChannelRequest, reset } = this.props;
    await addChannelRequest(text);
    reset();
  }

  renderRemoveButton = id => (
      <Button
        type="button btn-sm"
        className=" ml-1 text-dark"
        style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
        aria-label="Delete"
        onClick={this.handleRemoveChannel(id)}
      >
        <h4>&times;</h4>
   </Button>
  );

  render() {
    const {
      channels,
      submitting,
      handleSubmit,
      currentChannelId,
    } = this.props;

    const selectBgColor = id => ({ backgroundColor: currentChannelId === id ? '#639bc3' : 'transparent' });

    const channelNavClasses = id => cn({
      'nav-link': true,
      'text-white': currentChannelId !== id,
      active: currentChannelId === id,
    });

    return (
        <div >
          <div className="sidebar-header mt-3">
              <h4 className='text-center text-white'>Channels</h4>
          </div>
          <form onSubmit={handleSubmit(this.handleAddChannel)}>
            <div className="input-group m-2">
              <Field required component='input' className="form-control" disabled={submitting} maxLength={17} type="text" name="text" />
              <div className="input-group-append">
                <button className="btn btn-info btn-sm" disabled={submitting} type="submit">Add</button>
              </div>
            </div>
          </form>
          <ul className="nav nav-pills flex-column ml-4">
            {channels.map(({ id, name, removable }) => (
              <li key={id} className="nav-item">
                <div className='row'>
                  <div className='col-7'>
                    <a onClick={this.handleClickOnChannel} id={id} style={selectBgColor(id)} className={channelNavClasses(id)} href="#">{name}</a>
                  </div>
                  <div className='col-5 d-flex justify-content-end'>
                    {removable ? <RenameChannelModal name={name} id={id} /> : null}
                    {removable ? this.renderRemoveButton(id) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>);
  }
}

export default Channels;
