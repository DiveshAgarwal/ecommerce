/**
 * @module Catalog
 * @type repository
 * @description DB operations related to catalog
 * @author Divesh Agarwal
 */
const Models = require("../models");

const CatalogRepo = {
  /**
   * @param {object} catalog data of the catalog
   * @description creates a new catalog
   * @returns catalog
   */
  async createCatalog(catalog) {
    return Models.catalog.create(catalog);
  },

  /**
   * @param {object} condition data to get catalogs
   * @description lists all the catalogs along with products based on the condition
   * @returns catalog
   */
  async getCatalogs(condition) {
    return Models.catalog.findAll({
      include: {
        model: Models.product,
      },
      where: {
        ...condition,
      },
    });
  },
};

module.exports = CatalogRepo;
