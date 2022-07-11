/**
 * @type helper
 * @description helper functions required in the app
 * @author Divesh Agarwal
 */

function makeBatch(array, len) {
  const chunks = [];
  let i = 0;
  const n = array.length;
  while (i < n) {
    chunks.push(array.slice(i, (i += len)));
  }
  return chunks;
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;

module.exports = {
  makeBatch,
  reducer,
};
