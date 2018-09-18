import React, { Component } from 'react';

class Block extends Component {
  render() {
    const { index, timestamp, data, prevHash, thisHash } = this.props;
    return (
      <div className="flex card">
        <div className="card-head flex">
          <div className="inner-bounds">
            <p className="title">Block #</p>
            <p className="data">{index}</p>
          </div>
        </div>
        <div className="inner-bounds">
          <div className="data-group">
            <p className="title">Created at</p>
            <p className="data">{timestamp}</p>
          </div>
          {/* */}
          <div className="data-group">
            <p className="title">Data</p>
            <p className="data">{data}</p>
          </div>
          {/* */}
          <div className="data-group">
            <p className="title">Prev Hash</p>
            <p className="data hash">{prevHash}</p>
          </div>
          {/* */}
          <div className="data-group">
            <p className="title">Hash</p>
            <p className="data hash">{thisHash}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
