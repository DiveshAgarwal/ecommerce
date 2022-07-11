/**
 * @module Buyer
 * @type controller
 * @description calling functions for order related to buyer
 * @author Divesh Agarwal
 */

 class BuyerController {
  async listSellers(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }

  async sellerCatalog(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }

  async createOrder(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BuyerController();
