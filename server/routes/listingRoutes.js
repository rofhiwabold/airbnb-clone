const express = require("express");
const router = express.Router();

const {
  createListing,
  getListings,
  getListingById,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");

const { protect } = require("../middleware/authMiddleware");


// Create a listing
router.post("/", protect, createListing);


// Get all listings
router.get("/", getListings);


// Get single listing
router.get("/:id", getListingById);


// Update listing
router.put("/:id", protect, updateListing);


// Delete listing
router.delete("/:id", protect, deleteListing);


module.exports = router;