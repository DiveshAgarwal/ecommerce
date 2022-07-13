const router = require("express").Router();
const { authenticateToken } = require("../src/middlewares/auth");
const { validationMiddleware } = require("../src/middlewares");
const buyerController = require("../src/controllers/buyerController");
const { sellerIdSchema, orderSchema } = require("../src/validationSchema/buyerSchema");

router.get("/list-of-sellers", authenticateToken, buyerController.listSellers);
router.get(
  "/seller-catalog/:seller_id",
  authenticateToken,
  validationMiddleware(sellerIdSchema, 'params'),
  buyerController.sellerCatalog
);
router.post(
  "/create-order/:seller_id",
  authenticateToken,
  validationMiddleware(sellerIdSchema, 'params'),
  validationMiddleware(orderSchema),
  buyerController.createOrder
);

module.exports = router;
