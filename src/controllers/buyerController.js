/**
 * @module Buyer
 * @type controller
 * @description calling functions for order related to buyer
 * @author Divesh Agarwal
 */

const { getCatalogs } = require("../repositories/catalogRepo");
const { findWhere } = require("../repositories/userRepo");
const { createOrder } = require("../services/buyerService");

class BuyerController {
  async listSellers(req, res, next) {
    try {
      res.locals.data = await findWhere({ userType: "seller" });
      next();
    } catch (err) {
      next(err);
    }
  }

  async sellerCatalog(req, res, next) {
    try {
      const sellerId = parseInt(req.params.seller_id);
      res.locals.data = await getCatalogs({ sellerId });
      next();
    } catch (err) {
      next(err);
    }
  }

  async createOrder(req, res, next) {
    try {
      const data = req.body;
      const sellerId = req.params.seller_id;
      res.locals.data = await createOrder(data, sellerId, req.user);
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BuyerController();
