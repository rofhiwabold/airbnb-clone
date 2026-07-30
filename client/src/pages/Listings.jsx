import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Listings() {
  console.log("Listings component loaded");

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log("Fetching listings...");

    const fetchListings = async () => {
      try {
        const response = await API.get("/listings");

        console.log("Listings received:", response.data);

        setListings(response.data);
      } catch (error) {
        console.error(
          "Error fetching listings:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const filteredListings = listings.filter((listing) => {
    const matchesLocation = (listing.location || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      listing.category === selectedCategory;

    return matchesLocation && matchesCategory;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Listings</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        {[
          "All",
          "Beach",
          "Cabins",
          "Amazing Views",
          "Tiny Homes",
          "Apartments",
          "Countryside",
          "Luxury",
          "Camping",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 16px",
              borderRadius: "20px",
              border:
                selectedCategory === category
                  ? "2px solid #ff385c"
                  : "1px solid #ddd",
              background:
                selectedCategory === category
                  ? "#ff385c"
                  : "white",
              color:
                selectedCategory === category
                  ? "white"
                  : "black",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Listings */}
      {filteredListings.length === 0 ? (
        <div className="empty-state">
          <h2>No listings found</h2>
          <p>
            Try changing your search or selecting another category.
          </p>
        </div>
      ) : (
        filteredListings.map((listing) => (
          <div
            key={listing._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#fff",
            }}
          >
            <h2>{listing.title}</h2>

            <p>
              <strong>Location:</strong> {listing.location}
            </p>

            <p>
              <strong>Category:</strong> {listing.category}
            </p>

            <p>
              <strong>Price:</strong> R{listing.price}
            </p>

            <p>
              <strong>Guests:</strong> {listing.guests}
            </p>

            <p>
              <strong>Bedrooms:</strong> {listing.bedrooms}
            </p>

            <p>
              <strong>Beds:</strong> {listing.beds}
            </p>

            <p>
              <strong>Bathrooms:</strong> {listing.bathrooms}
            </p>

            <p>
              <strong>Description:</strong> {listing.description}
            </p>

            {listing.image && (
              <img
                src={listing.image}
                alt={listing.title}
                width="300"
                style={{
                  borderRadius: "8px",
                  marginBottom: "15px",
                  maxWidth: "100%",
                }}
              />
            )}

            <p>
              <strong>Owner:</strong>{" "}
              {listing.owner?.username || "Unknown"}
            </p>

            <Link to={`/listings/${listing._id}`}>
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Listings;