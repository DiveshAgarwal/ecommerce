/**
 * @module Order
 * @type model
 * @description DB model for orders
 * @author Divesh Agarwal
 */

 module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define(
    "order",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return Order;
};
