/**
 * @module Order
 * @type controller
 * @description calling functions for order related APIs
 * @author Divesh Agarwal
 */

class AuthController {
  async login(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }

  async register(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
