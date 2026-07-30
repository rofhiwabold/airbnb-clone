const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

// GET all users
router.get("/", protect, getUsers);

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

module.exports = router;