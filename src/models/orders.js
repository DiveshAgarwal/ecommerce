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
      orderId: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      productIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return Order;
};
