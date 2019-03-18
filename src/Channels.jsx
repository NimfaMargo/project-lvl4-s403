import React from 'react';

export default class Channels extends React.Component {
  render() {
    const { channels } = this.props;

    return (
      <div className="col-md-4">
        <ul className="list-group">
          {channels.map(({ id, name }) => (
            <li key={id} className="list-group-item">{name}</li>
          ))}
        </ul>
      </div>);
  }
}
