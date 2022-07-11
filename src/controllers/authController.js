/**
 * @module Order
 * @type controller
 * @description calling functions for order related APIs
 * @author Divesh Agarwal
 */

const { createUser, findByEmailId } = require("../repositories/userRepo");
const { loginUser } = require("../services/userService");

class AuthController {
  async login(req, res, next) {
    try {
      const data = req.body;
      const token = await loginUser(data);
      res.locals.data = token;
      next();
    } catch (err) {
      next(err);
    }
  }

  async register(req, res, next) {
    try {
      const data = req.body;
      const user = await findByEmailId(data.email);
      if (user) throw new Error("ERR_EMAIL_EXISTS");
      res.locals.data = await createUser(data);
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
