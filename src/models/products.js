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
      product__id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      added_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    { timestamps: true }
  );

  return Product;
};
