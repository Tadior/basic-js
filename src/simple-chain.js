const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
   array: [],
  getLength() {
   // throw new NotImplementedError('Not implemented');
   return this.array.length;
  },
  addLink(value) {
     let str;
     if (value === null) {
        str = 'null'
     } else if (value === 0) {
        str = '0';
     } else if(value === NaN) {
      str = 'NaN';
     } else {
        str = value.toString();
     }
     if (!str) {
         this.array.push(`()~~`);
         return this;
     } else {
         this.array.push(`( ${str} )~~`);
         return this;
     }
  },
  removeLink(position) {
     if (!Number.isInteger(position) || position >= this.array.length - 1 || position < 0) {
      this.array = [];
       throw new NotImplementedError("You can't remove incorrect link!");
     } else {
      this.array.splice(position - 1, 1);
      return this
     }
  },
  reverseChain() {
    const newArr = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      newArr.push(this.array[i]);
    }
    this.array = newArr;
    return this;
  },
  finishChain() {
   // throw new NotImplementedError('Not implemented');
     let str = '';
     this.array.forEach(element => {
        str += element;
     })
     const out = str.slice(str[0] , str.length - 2);
     this.array = [];
     return out;
  }
};


module.exports = {
  chainMaker
};
