/**
 * @module Product
 * @type model
 * @description DB model for product
 * @author Divesh Agarwal
 */

 module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      productId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      catalogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: true }
  );

  return Product;
};
