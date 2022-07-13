/**
 * @type helper
 * @description helper functions required in the app
 * @author Divesh Agarwal
 */

const jwt = require("jsonwebtoken");
const config = require("../../config");

/**
 * @param {object} promises list of promises
 * @description resolves promises to result set for easy handling
 * @returns promise results
 */
const getPromiseResults = (promises) => {
  const result = [];
  for (const element of promises) {
    if (element.status === "fulfilled") {
      result.push(element.value);
    }
  }
  return result;
};

/**
 * @param {object} data info for the payload
 * @description creates new token based on the payload
 * @returns token
 */
const generateAccessToken = (data) => {
  return jwt.sign(data, config.ACCESS_TOKEN_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRES_IN,
  });
};

/**
 * @param {number} length length of the random string
 * @description generates a random string of the size given.
 * @returns string
 */
const getOrderId = (length = 10) => {
  let res = "";
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const len = text.length;
  for (let i = 0; i < length; i++) {
    res += text.charAt(Math.floor(Math.random() * len));
  }
  return res;
};

module.exports = {
  getPromiseResults,
  generateAccessToken,
  getOrderId,
};
