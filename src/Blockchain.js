import React, { Component } from 'react';
import Block from './Block';

const dummyBlockChain = [
  {
    index: 0,
    timestamp: '2018-09-15T18:13:06.878Z',
    data: 'Genesis Block',
    prevHash: '0',
    thisHash: 'bb77920c6471bed33aac2d7c576cc415'
  },
  {
    index: 1,
    timestamp: '2018-09-15T18:13:06.879Z',
    data: 'Block #1',
    prevHash: 'bb77920c6471bed33aac2d7c576cc415',
    thisHash: 'e24a05526959fd15725b9c176d2aa379'
  },
  {
    index: 2,
    timestamp: '2018-09-15T18:13:06.880Z',
    data: 'Block #2',
    prevHash: 'e24a05526959fd15725b9c176d2aa379',
    thisHash: 'f2db66e69f18793f22dd3980f0423e56'
  }
];

class Blockchain extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="inner-container center">
          {dummyBlockChain.map(block => (
            <Block
              key={block.index}
              index={block.index}
              timestamp={block.timestamp}
              data={block.data}
              prevHash={block.prevHash}
              thisHash={block.thisHash}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Blockchain;
