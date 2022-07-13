/**
 * @module Seller
 * @type controller
 * @description calling functions for order related to seller
 * @author Divesh Agarwal
 */

const { getOrders } = require("../repositories/orderRepo");
const { createCatalog } = require("../services/sellerService");

class SellerController {
  async createCatalog(req, res, next) {
    try {
      const data = req.body;
      const user = req.user;
      res.locals.data = await createCatalog(data, user);
      next();
    } catch (err) {
      next(err);
    }
  }

  async listOrders(req, res, next) {
    try {
      const sellerId = req.user.userId;
      res.locals.data = await getOrders({ sellerId });
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SellerController();
