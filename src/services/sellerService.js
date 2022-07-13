/**
 * @module Seller
 * @type service
 * @description service functions for seller
 * @author Divesh Agarwal
 */

const { getCatalogs, createCatalog } = require("../repositories/catalogRepo");
const { createProducts } = require("../repositories/productRepo");

class SellerService {
  /**
   * @param {object} data catalog along with products
   * @param {number} seller user id of the seller
   * @description creates a new catalog with all the products associated with it
   * @returns catalog
   */
  async createCatalog(data, seller) {
    // checking if catalog exists for the user
    const catalog = await getCatalogs({
      sellerId: seller.userId,
    });
    if (catalog && catalog.length) throw new Error("ERR_CATALOG_EXISTS");

    // creating catalog for the user
    const newCatalog = await createCatalog({
      catalogName: data.catalogName,
      sellerId: seller.userId,
    });
    const catalogId = newCatalog.catalogId;

    // preparing products to insert
    const products = data.products.map((pro) => {
      return {
        ...pro,
        catalogId,
        sellerId: seller.userId,
      };
    });

    // adding the products
    const newProducts = await createProducts(products);
    return newProducts;
  }
}

module.exports = new SellerService();
