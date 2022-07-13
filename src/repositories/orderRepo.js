/**
 * @module Order
 * @type repository
 * @description DB operations related to order
 * @author Divesh Agarwal
 */
const Models = require("../models");

const OrderRepo = {
  /**
   * @param {object} orders data of the order
   * @description creates a new order
   * @returns order
   */
  async createOrder(orders) {
    return Models.order.bulkCreate(orders);
  },

  /**
   * @param {object} condition data to get orders
   * @description lists all the orders for a seller
   * @returns orders
   */
  async getOrders(condition) {
    const orders = await Models.order.findAll({
      attributes: ["orderId", "createdAt"],
      include: [
        {
          model: Models.product,
          attributes: ["productName", "price"],
        },
        {
          model: Models.user,
          attributes: ["name", "userId"],
        },
      ],
      where: {
        ...condition,
      },
    });
    // grouping the data based on the orderId
    return orders.reduce(function (r, a) {
      r[a.orderId] = r[a.orderId] || [];
      r[a.orderId].push(a);
      return r;
    }, Object.create(null));
  },
};

module.exports = OrderRepo;
