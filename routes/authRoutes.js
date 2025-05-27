const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authenticate, authController.getProfile);
router.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.send("Welcome Admin");
});

module.exports = router;
