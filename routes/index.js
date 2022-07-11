
const sellerRoutes = require('./sellerRoutes');
const buyerRoutes = require('./buyerRoutes');
const authRoutes = require('./authRoutes');

module.exports = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/seller", sellerRoutes);
  app.use("/api/buyer", buyerRoutes);
};
