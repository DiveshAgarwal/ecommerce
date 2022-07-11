/**
 * @module Seller
 * @type controller
 * @description calling functions for order related to seller
 * @author Divesh Agarwal
 */

 class SellerController {
  async createCatalog(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }

  async listOrders(req, res, next) {
    try {
      
      res.locals.data = {};
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SellerController();
