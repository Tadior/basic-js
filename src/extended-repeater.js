const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

//console.log(undefined.toString())
function repeater(str, options) {
   options.repeatTimes = options.repeatTimes || 1;
   options.additionRepeatTimes = options.additionRepeatTimes || 1;
   if (options.hasOwnProperty('addition')) {
      options.addition = String(options.addition)
   } else {
      options.addition = '';
   }
   options.additionSeparator = options.additionSeparator || '|'
   options.separator = options.separator || '+'
   let out = []
   let array = []
   for (let i = 0; i < options.additionRepeatTimes; i++) {
      array.push(options.addition)
   }
   array = array.join(options.additionSeparator)
   for (let i = 0; i < options.repeatTimes; i++) {
      out.push(str + array)
   }
   return out.join(options.separator)
 }
//repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })
//, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
//repeater('la', { repeatTimes: 3 })
//, 'la+la+la'
//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

module.exports = {
  repeater
};
