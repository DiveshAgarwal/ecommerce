/**
 * @module Catalog
 * @type model
 * @description DB model for catalog of seller
 * @author Divesh Agarwal
 */

module.exports = (sequelize, Sequelize) => {
  const Catalog = sequelize.define(
    "catalog",
    {
      catalog_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return Catalog;
};
