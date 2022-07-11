/**
 * @module Auth
 * @type service
 * @description service functions for Auth / User data
 * @author Divesh Agarwal
 */

const { generateAccessToken } = require("../helpers");
const { findByEmailId } = require("../repositories/userRepo");

class UserService {
  async loginUser(data) {
    const user = await findByEmailId(data.email);
    // validating user details
    if (!user) throw new Error("ERR_EMAIL_NOT_EXISTS");
    if (data.password !== user.password) throw new Error("ERR_PWD_INCORRECT");
    if (data.userType !== user.userType) throw new Error("ERR_UTYPE_INCORRECT");

    const token = await generateAccessToken({
      userId: user.userId,
      userType: user.userType,
      email: user.email,
    });

    return token;
  }
}

module.exports = new UserService();
