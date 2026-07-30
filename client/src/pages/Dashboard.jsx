import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
  const fetchListings = async () => {
    try {
      const response = await API.get("/listings");
      setListings(response.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  fetchListings();
}, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      <h1>
        Welcome, {user?.username || "User"} 👋
      </h1>

      <p className="dashboard-subtitle">
        Manage your Airbnb account from one place.
      </p>

      {/* Statistics */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <h2>🏠</h2>
         <h3>Total Listings</h3>

         <h2>{listings.length}</h2>

         <p>Properties currently available.</p>
        </div>

       <div className="stat-card">
       <h2>📅</h2>
       <h3>Reservations</h3>
       <h2>0</h2>
       <p>No reservations yet.</p>
        </div>

      <div className="stat-card">
        <h2>⭐</h2>
        <h3>Experiences</h3>
        <h2>12</h2>
        <p>Available experiences.</p>
      </div>

        <div className="stat-card">
          <h2>🔐</h2>
          <h3>Account</h3>
          <p>Status: Active</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">

        <h2>Quick Actions</h2>

        <button onClick={() => navigate("/create-listing")}>
          ➕ Create Listing
        </button>

        <button onClick={() => navigate("/listings")}>
          🏠 View Listings
        </button>

        <button onClick={() => navigate("/experiences")}>
          🌍 Browse Experiences
        </button>

        <button onClick={logout}>
          🚪 Logout
        </button>

      </div>

       {/* Host Profile */}
      <div className="dashboard-card">

        <h2>Host Profile</h2>

        <p>
          👤 Username: {user?.username}
        </p>

        <p>
          🔐 Role: {user?.role || "User"}
        </p>

        <p>
          🟢 Account Status: Active
        </p>

      </div>

      {/* Recent Activity */}
      <div className="dashboard-card">

  <h2>Recent Listings</h2>

  {listings.length === 0 ? (

    <p>No listings available.</p>

  ) : (

    <ul>

      {listings.slice(0, 3).map((listing) => (

        <li key={listing._id}>

          🏠 <strong>{listing.title}</strong>

          <br />

          📍 {listing.location}

          <br />

          💰 R{listing.price}

        </li>

      ))}

    </ul>

  )}

</div>
    </div>
  );
}

export default Dashboard;