import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);


  // Get existing listing
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await API.get(`/listings/${id}`);

        setFormData({
          title: response.data.title,
          description: response.data.description,
          location: response.data.location,
          price: response.data.price,
          image: response.data.image || "",
        });

      } catch (error) {
        console.error(
          "Error loading listing:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.put(`/listings/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Listing updated successfully");

      navigate(`/listings/${id}`);

    } catch (error) {
      console.error(
        "Error updating listing:",
        error.response?.data || error.message
      );
    }
  };


  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Listing</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <br /><br />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />

        <br /><br />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <br /><br />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <br /><br />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <br /><br />

        <button type="submit">
          Update Listing
        </button>

      </form>
    </div>
  );
}

export default EditListing;