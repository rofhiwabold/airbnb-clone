const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const listingRoutes = require("./routes/listingRoutes");

// Load environment variables
dotenv.config({ path: "./server/.env" });

// CREATE EXPRESS APP ✅
const app = express();


// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "YOUR_RENDER_FRONTEND_URL"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received:");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Body:", req.body);
  next();
});


// Routes
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:");
    console.error(err);
  });


// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Airbnb Clone Backend!");
});


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});