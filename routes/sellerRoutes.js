const router = require("express").Router();
const { authenticateToken } = require("../src/middlewares/auth");
const { validationMiddleware } = require("../src/middlewares");
const { catalogSchema } = require("../src/validationSchema/sellerSchema");
const sellerController = require("../src/controllers/sellerController");

router.get("/orders", authenticateToken, sellerController.listOrders);
router.post(
  "/create-catalog",
  authenticateToken,
  validationMiddleware(catalogSchema),
  sellerController.createCatalog
);

module.exports = router;
