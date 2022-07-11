const router = require("express").Router();
const { authenticateToken } = require("../src/middlewares/auth");
const sellerController = require("../src/controllers/sellerController");

router.get("/orders", authenticateToken, sellerController.listOrders);
router.post("/create-catalog", authenticateToken, sellerController.createCatalog);

module.exports = router;
