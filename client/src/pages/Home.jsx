import { useEffect, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import LocationCard from "../components/LocationCard";
import ExperienceCard from "../components/ExperienceCard";
import ShopCard from "../components/ShopCard";
import FutureCard from "../components/FutureCard";
import Footer from "../components/Footer";

import API from "../services/api";


function Home() {

  const [listings, setListings] = useState([]);


  useEffect(() => {

    const fetchListings = async () => {

      try {

        const response = await API.get("/listings");

        setListings(response.data);

      } catch (error) {

        console.error(
          "Error fetching listings:",
          error.response?.data || error.message
        );

      }

    };


    fetchListings();

  }, []);

  return (
    <>

      <Header />

      <SearchBar />

      <Hero />


      {/* Real Listings from MongoDB */}
      <section>

        <h2>
          Popular stays
        </h2>

        <div className="property-grid">

          {listings.length === 0 ? (

            <p>
              No listings available yet.
            </p>

          ) : (

            listings.map((listing) => (

              <PropertyCard
                key={listing._id}
                listing={listing}
              />

            ))

          )}

        </div>

      </section>

    <section className="inspiration">
  <h2>Inspiration for your next trip</h2>

  <div className="location-grid">
    <LocationCard
      image="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=600&q=80"
      title="Cape Town"
      distance="2-hour drive"
    />

    <LocationCard
      image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80"
      title="Johannesburg"
      distance="1-hour flight"
    />

    <LocationCard
      image="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400" title="Durban"
      distance="2-hour flight"
    />

    <LocationCard
      image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=600&q=80"
      title="Kruger Park"
      distance="5-hour drive"
    />
  </div>
</section>

      <section className="experiences-section">

  <h2>
    Discover Experiences
  </h2>

  <div className="experiences-grid">

    <ExperienceCard
      image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      title="Outdoor adventures"
      description="Explore unique activities and unforgettable experiences."
      category="outdoor"
    />

    <ExperienceCard
      image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
      title="Cultural experiences"
      description="Discover local traditions, food, and hidden gems."
      category="cultural"
    />

    <ExperienceCard
      image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
      title="Group activities"
      description="Connect with people and create amazing memories."
      category="group"
    />

  </div>

</section>

      <section className="shop-section">

        <h2>
          Shop Airbnb
        </h2>


        <div className="shop-grid">


          <ShopCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            title="Airbnb Essentials"
            description="Everything you need to make your stay comfortable."
            category="essentials"
          />


          <ShopCard
            image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            title="Host Inspiration"
            description="Furniture and décor ideas for amazing hosting."
            category="host"
          />


          <ShopCard
            image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
            title="Travel Collection"
            description="Travel accessories and essentials for every journey."
            category="travel"
          />


        </div>

      </section>

      <section className="future-section">

        <h2>
          Future Getaways
        </h2>


        <div className="future-grid">


          <FutureCard
            image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            title="Mountain escapes"
            description="Relax in beautiful destinations surrounded by nature."
          />


          <FutureCard
            image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
            title="Beach destinations"
            description="Discover peaceful beaches and unforgettable views."
          />


          <FutureCard
            image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            title="Adventure trips"
            description="Explore new places and create lasting memories."
          />


        </div>

      </section>

      <Footer />

    </>
  );
}


export default Home;