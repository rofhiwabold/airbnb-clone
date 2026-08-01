import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nights, setNights] = useState(1);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await API.get(`/listings/${id}`);

        setListing(response.data);
      } catch (error) {
        console.error(
          "Error fetching listing:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);


 const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this listing?"
  );

  if (!confirmDelete) return;

  try {
    const token = localStorage.getItem("token");

    const response = await API.delete(`/listings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Delete response:", response.data);

    alert("Listing deleted successfully");

    navigate("/listings");

  } catch (error) {
    console.error(
      "Error deleting listing:",
      error.response?.data || error.message
    );
  }
};

  if (loading) {
    return <h2>Loading listing...</h2>;
  }

  if (!listing) {
    return <h2>Listing not found</h2>;
  }


  const isOwner =
    user && listing.owner?._id === user.id;

    const cleaningFee = 300;
    const serviceFee = 150;

    const subtotal = listing.price * nights;

    const total = subtotal + cleaningFee + serviceFee;

  return (
  <div className="listing-details-page">

    <div className="listing-container">

      <h1>{listing.title}</h1>

      {listing.image && (
        <img
          className="listing-image"
          src={listing.image}
          alt={listing.title}
        />
      )}

      <div className="listing-content">

        <div className="listing-info">

         <h3>
        📍 {listing.location}
         </h3>


         <div className="map-container">

       <iframe
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          src={`https://www.google.com/maps?q=${listing.location}&output=embed`}
>
        </iframe>

         </div>

          <h2>
            R{listing.price} <span>/ night</span>
          </h2>

          <p>
            {listing.description}
          </p>

         <div className="property-features">

  <p>
    👥 Guests: {listing.guests}
  </p>

  <p>
    🛏 Bedrooms: {listing.bedrooms}
  </p>

  <p>
    🛌 Beds: {listing.beds}
  </p>

  <p>
    🚿 Bathrooms: {listing.bathrooms}
  </p>

</div>

          <div className="host-info">

            <h3>
              Hosted by {listing.owner?.username || "Unknown"}
            </h3>

            <p>
              ⭐ 5.0 rating
            </p>

          </div>

        </div>


       {!isOwner && (
  <div className="booking-box">

    <h2>
      Reserve your stay
    </h2>

    <p>
      R{listing.price} / night
    </p>


    <label>
      Number of nights:
    </label>

    <input
      type="number"
      min="1"
      value={nights}
      onChange={(e) =>
        setNights(Number(e.target.value))
      }
    />


    <p>
      Accommodation: R{subtotal}
    </p>

    <p>
      Cleaning fee: R{cleaningFee}
    </p>

    <p>
      Service fee: R{serviceFee}
    </p>


    <hr />


    <h2>
      Total: R{total}
    </h2>


    <button
      className="reserve-btn"
      onClick={() =>
        alert(
          `Reservation request sent!\n\nAn email notification will be sent to ${listing.owner?.email} with payment instructions.`
        )
      }
    >
      Reserve
    </button>

  </div>
)}

        {isOwner && (
          <div className="owner-actions">

            <Link to={`/edit-listing/${listing._id}`}>
              <button className="edit-btn">
                Edit Listing
              </button>
            </Link>


            <button
              className="delete-btn"
              onClick={handleDelete}
            >
              Delete Listing
            </button>

          </div>
        )}

      </div>

    </div>

  </div>
);
}

export default ListingDetails;