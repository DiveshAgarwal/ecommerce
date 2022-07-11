const jwt = require("jsonwebtoken");
const config = require("../../config");

const authenticateToken = (req, res, next) => {
  const currentRoute = config.PUBLIC_URLS[req.originalUrl];
  if (
    (currentRoute && currentRoute.includes(req.method))
  ) {
    return next();
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .send("Acccess denied. Authorization token required.");
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = { authenticateToken };
