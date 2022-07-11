const router = require("express").Router();
const { authenticateToken } = require("../src/middlewares/auth");
const buyerController = require("../src/controllers/buyerController");

router.get("/list-of-sellers", authenticateToken, buyerController.listSellers);
router.get(
  "/seller-catalog/:seller_id",
  authenticateToken,
  buyerController.sellerCatalog
);
router.post(
  "/create-order/:seller_id",
  authenticateToken,
  buyerController.createOrder
);

module.exports = router;
