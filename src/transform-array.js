const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   if (!(Array.isArray(arr))) {
      throw new Error(`'arr' parameter must be an instance of the Array!`)
   };
   let out = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == undefined) {
         continue;
      }
      let value;
      switch (arr[i]) {
         case '--double-next' : 
         if (i === arr.length - 1) {
            continue;
         }
            value = arr[i + 1];
            out.push(value);
            continue;
         case '--double-prev' : 
            if (i === 0 || arr[i - 2] == '--discard-next') {
               continue;
            }
               value = arr[i - 1];
            out.push(value);
            continue;
         case '--discard-next' : 
            if (i === arr.length - 1) {
               continue;
            }
            i++;
            continue;
         case '--discard-prev' : 
            if (i === 0 || arr[i - 2] == '--discard-next') {
               continue;с
            }
            value = out.pop();
            continue;
      }
      out.push(arr[i])
   }
   return out;
}

module.exports = {
  transform
};
