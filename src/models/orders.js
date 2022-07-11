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
      order_id: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      buyer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      product_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return Order;
};
