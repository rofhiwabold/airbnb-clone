import { useState } from "react";

function ExperienceBooking() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    date: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you, ${booking.name}!\n\nYour experience has been booked successfully.\n\nConfirmation has been sent to ${booking.email}.`
    );

    setBooking({
      name: "",
      email: "",
      date: "",
      guests: 1,
    });
  };

  return (
    <div className="booking-page">
      <h1>Book an Experience</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={booking.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={booking.email}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="guests"
          min="1"
          value={booking.guests}
          onChange={handleChange}
          required
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default ExperienceBooking;