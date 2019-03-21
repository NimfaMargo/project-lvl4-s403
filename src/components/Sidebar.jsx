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
        <nav id="sidebar">
          <div className="sidebar-header">
              <h4>Channels List</h4>
          </div>
          <ul className="list-group components">
            {channels.map(({ id, name }) => (
              <li key={id} className="list-group">
                <a href="#">{name}</a>
              </li>
            ))}
          </ul>
        </nav>);
  }
}

export default connect(mapStateToProps)(Channels);
