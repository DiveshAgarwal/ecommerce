/**
 * @module Buyer
 * @type service
 * @description service functions for buyer
 * @author Divesh Agarwal
 */

const { getPromiseResults, getOrderId } = require("../helpers");
const { createOrder } = require("../repositories/orderRepo");
const { getProduct } = require("../repositories/productRepo");

class BuyerService {
  /**
   * @param {object} data order data along with products
   * @param {number} sellerId user id of the seller
   * @param {object} user data of the buyer
   * @description creates a new order
   * @returns order
   */
  async createOrder(data, sellerId, user) {
    // gets random order id
    const orderId = getOrderId();
    let promises = [];
    // checking if the seller has the products or not
    const order = [];
    data.products.forEach((element) => {
      promises.push(getProduct({ productId: element, sellerId }));
      const obj = {
        orderId,
        productId: element,
        sellerId,
        buyerId: user.userId,
      };
      order.push(obj);
    });
    const pro = await Promise.allSettled(promises);
    const results = getPromiseResults(pro);

    // throwing error if issue with seller and product association
    if (data.products.length !== results.length)
      throw new Error("ERR_PRODUCTS_NOT_OWNED");
    results.forEach((p) => {
      if (!p.length) throw new Error("ERR_PRODUCTS_NOT_OWNED");
    });

    // creating the order in the DB
    const createdOrder = await createOrder(order);
    return createdOrder;
  }
}

module.exports = new BuyerService();
