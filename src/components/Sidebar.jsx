import React from 'react';
import { connect } from 'react-redux';
// // import * as actions from '../actions';
// // import { filteredTasksSelector } from '../selectors';
//
const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
  };
  return props;
};

class Channels extends React.Component {
  render() {
    const { channels } = this.props;

    return (
        <div >
          <div className="sidebar-header mt-3">
              <h4 className='text-center'>Channels</h4>
          </div>
          <ul className="list-group align-items-center m-3">
            {channels.map(({ id, name }) => (
              <li key={id} className="list-group m-2">
                <a href="#">{name}</a>
              </li>
            ))}
          </ul>
        </div>);
  }
}

export default connect(mapStateToProps)(Channels);
