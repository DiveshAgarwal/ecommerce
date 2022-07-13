/**
 * @module Product
 * @type repository
 * @description DB operations related to products
 * @author Divesh Agarwal
 */
const Models = require("../models");

const ProductRepo = {
  /**
   * @param {object} products data of the products to be added
   * @description creates new products
   * @returns products
   */
  async createProducts(products) {
    return Models.product.bulkCreate(products);
  },
  /**
   * @param {object} condition data to get orders
   * @description lists all the orders for a seller
   * @returns orders
   */
  async getProduct(condition) {
    return Models.product.findAll({
      where: {
        ...condition,
      },
    });
  },
};

module.exports = ProductRepo;
