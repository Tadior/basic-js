const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   if (members === null || typeof members !== 'object') {
      console.log(typeof members)
      return false;
   }
   const letters = [];
   for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== 'string') {
         continue;
      }
      const letter = (members[i]).replace(/\s+/g, '');
      letters.push(letter[0].toUpperCase());
   }
   letters.sort();
   const out = letters.join('');
   return out;
}

module.exports = {
  createDreamTeam
};
