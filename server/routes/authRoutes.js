const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  updateProfile,
} = require("../controllers/authController");

const {
  isAuthenticated,
} = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

// Profile
router.get("/profile", isAuthenticated, getProfile);
router.put("/profile", isAuthenticated, updateProfile);

module.exports = router;