const Listing = require("../models/Listing");

// Create a listing
const createListing = async (req, res) => {
  try {
    const {
    title,
    description,
    location,
    price,
    image,
    category,
    guests,
    bedrooms,
    beds,
    bathrooms,
     } = req.body;

   const listing = await Listing.create({
    title,
    description,
    location,
    price,
    image,
    category,
    guests,
    bedrooms,
    beds,
    bathrooms,
    owner: req.user._id,
    });

    res.status(201).json({
      message: "Listing created successfully",
      listing,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get all listings
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate("owner", "username email");

    res.status(200).json(listings);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get single listing
const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate("owner", "username email");

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    res.status(200).json(listing);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update listing
const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    listing.title = req.body.title || listing.title;
    listing.description = req.body.description || listing.description;
    listing.location = req.body.location || listing.location;
    listing.price = req.body.price || listing.price;
    listing.image = req.body.image || listing.image;
    listing.category = req.body.category || listing.category;

    listing.guests = req.body.guests || listing.guests;
    listing.bedrooms = req.body.bedrooms || listing.bedrooms;
    listing.beds = req.body.beds || listing.beds;
    listing.bathrooms = req.body.bathrooms || listing.bathrooms;

    const updatedListing = await listing.save();

    res.status(200).json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete listing
const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    await listing.deleteOne();

    res.status(200).json({
      message: "Listing deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createListing,
  getListings,
  getListingById,
  updateListing,
  deleteListing,
};