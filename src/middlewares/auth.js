const jwt = require("jsonwebtoken");
const config = require("../../config");
const { findByUserId } = require("../repositories/userRepo");

const authenticateToken = async (req, res, next) => {
  const currentRoute = config.PUBLIC_URLS[req.originalUrl];
  if (currentRoute && currentRoute.includes(req.method)) {
    return next();
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .send("Acccess denied. Authorization token required.");
  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    const user = await findByUserId(decoded.userId);
    if (!user) {
      return res
        .status(401)
        .send("Invalid Request.");
    }
    const sellerRoute = config.SELLER_URLS[req.route.path];
    const buyerRoute = config.BUYER_URLS[req.route.path];
    if (decoded.userType === 'buyer' && buyerRoute && buyerRoute.includes(req.method)) {
      next();
    } else if (decoded.userType === 'seller' && sellerRoute && sellerRoute.includes(req.method)) {
      next();
    } else {
      return res
        .status(401)
        .send("Invalid Request.");
    }
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = { authenticateToken };
