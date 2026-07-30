import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateListing() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Beach");

  // Airbnb property details
  const [guests, setGuests] = useState(2);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/listings",

        {
         title,
         description,
         location,
         category,
         price,
         image,
         guests,
         bedrooms,
         beds,
         bathrooms,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Listing created successfully");

      navigate("/listings");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to create listing"
      );
    }
  };

  return (
    <div className="create-listing-page">
      <h1>Create Listing</h1>

      <form onSubmit={handleSubmit} className="create-listing-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
         
         <select
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           required
>
          <option value="Beach">🏖 Beach</option>
          <option value="Cabins">🏕 Cabins</option>
          <option value="Amazing Views">🌄 Amazing Views</option>
          <option value="Tiny Homes">🏠 Tiny Homes</option>
          <option value="Apartments">🏢 Apartments</option>
          <option value="Countryside">🌳 Countryside</option>
          <option value="Luxury">✨ Luxury</option>
          <option value="Camping">⛺ Camping</option>
      </select>
         

        <input
          type="number"
          placeholder="Price per night"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
        />

        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          min="1"
        />

        <input
          type="number"
          placeholder="Beds"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          min="1"
        />

        <input
          type="number"
          placeholder="Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          min="1"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">
          Create Listing
        </button>
      </form>
    </div>
  );
}

export default CreateListing;