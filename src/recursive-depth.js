const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth) {
      if ( !depth ){
         depth = 0;
      }
      if ( Array.isArray(arr) ) {
         depth = depth + 1;
         let level = depth;
         for(let i=0; i<arr.length; i++){
            let item = arr[i];
            let sublevel = this.calculateDepth(item, depth)
            level = Math.max( level, sublevel);
         }
         return level;
      }  else {
         return depth;
      }
  }
}
//const test = new DepthCalculator();
//console.log( test.calculateDepth([1, 2, 3, 4, 5, [1]]))
module.exports = {
  DepthCalculator
};
