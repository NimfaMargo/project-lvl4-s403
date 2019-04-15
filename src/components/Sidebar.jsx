import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cn from 'classnames';
import connect from '../utils/connect.js';
import RenameChannelModal from './modals/RenameChannelModal.jsx';
import DeleteChannelModal from './modals/DeleteChannelModal.jsx';
import { channelsSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
    currentChannelId: state.currentChannelId,
  };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })

class Channels extends React.Component {
  handleClickOnChannel = (e) => {
    e.preventDefault();
    const { changeChannelId, currentChannelId } = this.props;
    const id = Number(e.target.id);
    return currentChannelId === id ? null : changeChannelId({ id });
  }

  handleAddChannel = async ({ text }) => {
    const { addChannelRequest, reset } = this.props;
    await addChannelRequest(text);
    reset();
  }

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
        <div className="container">
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
          <div className="channels-list p-0 m-0 overflow-auto" style={{ height: '500px' }}>
            <ul className="nav nav-pills flex-column ml-4">
              {channels.map(({ id, name, removable }) => (
                <li key={id} className="nav-item">
                  <div className='row'>
                    <div className='col-7'>
                      <a onClick={this.handleClickOnChannel} id={id} style={selectBgColor(id)} className={channelNavClasses(id)} href="#">{name}</a>
                    </div>
                    <div className='col-5 d-flex justify-content-end'>
                      {removable ? <RenameChannelModal name={name} id={id} /> : null}
                      {removable ? <DeleteChannelModal name={name} id={id} /> : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>);
  }
}

export default Channels;
