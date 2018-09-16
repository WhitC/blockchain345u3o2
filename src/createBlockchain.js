import sha256 from 'sha56';

class Block {
  constructor(index, timestamp, data, prevHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.thisHash = sha256(
      this.index + this.timestamp + this.data + this.prevHash
    );
  }
}

const createGenesisBlock = () => {
  return new Block(0, new Date(), 'Genesis Block', '0');
};

const nextBlock = (lastBlock, data) => {
  return new Block(lastBlock.index + 1, new Date(), data, lastBlock.thisHash);
};

let blockchain = [createGenesisBlock()];
let previousBlock = blockchain[0];

const createBlockchain = num => {
  for (let i = 0; i < lengthToCreate; i++) {
    const blockToAdd = nextBlock(previousBlock);
    blockchain.push(blockToAdd);
    previousBlock = blockToAdd;

    // console.log(`Block #${blockToAdd.index}`);
    // console.log(`Hash: ${blockToAdd.thisHash}`)
    // console.log('\n')
  }
  console.log('BLOCKCHAIN');
  console.log('\n');
};

const lengthToCreate = 20;
createBlockchain(lengthToCreate);
