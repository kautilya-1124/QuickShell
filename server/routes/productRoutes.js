const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { isAuthenticated } = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

// Create Product
router.post(
  "/",
  isAuthenticated,
  upload.single("image"),
  createProduct
);

// Get All Products
router.get("/", getProducts);

// Get Product By ID
router.get("/:id", getProductById);

module.exports = router;