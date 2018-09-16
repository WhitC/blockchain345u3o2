import React, { Component } from 'react';

class Block extends Component {
  render() {
    const { index, timestamp, data, prevHash, thisHash } = this.props;
    return (
      <div className="block flex card">
        <p>Index: {index}</p>
        <p>Created at: {timestamp.split('T')[0]}</p>
        <p>Data: {data}</p>
        <p>Prev Hash: {prevHash}</p>
        <p>Hash: {thisHash}</p>
      </div>
    );
  }
}

export default Block;
