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
      catalogId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      catalogName: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    },
    { timestamps: true }
  );

  return Catalog;
};
