import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/listings?location=${encodeURIComponent(location)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  };

  return (
    <div className="search-bar">
      <div className="search-item">
        <strong>Location</strong>
        <input
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="search-item">
        <strong>Check in</strong>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="search-item">
        <strong>Check out</strong>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="search-item">
        <strong>Guests</strong>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <button className="search-btn" onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
}

export default SearchBar;