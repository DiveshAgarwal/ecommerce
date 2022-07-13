/**
 * @module ModelRelations
 * @type model
 * @description relations between the models
 * @author Divesh Agarwal
 */

const modelRelations = (sequelize) => {
  const { catalog, user, product, order } = sequelize.models;

  user.hasOne(catalog, { targetKey: "userId", foreignKey: "sellerId" });

  order.belongsTo(user, { targetKey: "userId", foreignKey: "sellerId" });
  order.belongsTo(user, { targetKey: "userId", foreignKey: "buyerId" });
  order.belongsTo(product, { targetKey: "productId", foreignKey: "productId" })

  product.belongsTo(catalog, {foreignKey: "catalogId", targetKey: "catalogId"});
  catalog.hasMany(product, {foreignKey: "catalogId", targetKey: "catalogId"})

  product.belongsTo(user, {foreignKey: "sellerId", targetKey: "userId"});
  user.hasMany(product, {foreignKey: "sellerId", targetKey: "userId"})
};

module.exports = { modelRelations };
