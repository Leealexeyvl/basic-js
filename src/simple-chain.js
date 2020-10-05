const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultStorage: [],
  getLength() {
    return this.resultStorage.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.resultStorage.push(`( )`);
    } else {
      this.resultStorage.push(`( ${String(value)} )`);
    }
    return this;
  },
  removeLink(position) {
    if (!this.resultStorage[position - 1] || typeof position !== 'number' || position != Math.trunc(position)) {
      this.resultStorage = [];
      throw new Error('Incorrect position');
    } else {
      this.resultStorage.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.resultStorage.reverse();
    return this;
  },
  finishChain() {

    let result = this.resultStorage.join('~~');
    this.resultStorage = [];
    return result;
  }
};

console.log()

module.exports = chainMaker;
