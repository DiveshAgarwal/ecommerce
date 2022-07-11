const router = require("express").Router();
const authController = require("../src/controllers/authController");
const { validationMiddleware } = require("../src/middlewares");
const { registerSchema, loginSchema } = require("../src/validationSchema/userSchema");

router.post(
  "/register",
  validationMiddleware(registerSchema),
  authController.register
);
router.post(
  "/login",
  validationMiddleware(loginSchema),
  authController.login
);

module.exports = router;
