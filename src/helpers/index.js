/**
 * @type helper
 * @description helper functions required in the app
 * @author Divesh Agarwal
 */

const jwt = require("jsonwebtoken");
const config = require("../../config");

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

const generateAccessToken = (data) => {
  return jwt.sign(data, config.ACCESS_TOKEN_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES_IN,
  });
};

module.exports = {
  makeBatch,
  reducer,
  generateAccessToken,
};
