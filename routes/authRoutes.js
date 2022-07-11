const router = require("express").Router();
const authController = require("../src/controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
