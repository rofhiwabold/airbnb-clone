import ExperienceItem from "../components/ExperienceItem";
import { useParams } from "react-router-dom";

function Experiences() {
  const { category } = useParams();

  const outdoor = [
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      title: "Table Mountain Hiking",
      description: "Guided hike with breathtaking views over Cape Town.",
      price: "R850 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      title: "Durban Surf Lessons",
      description: "Learn to surf on Durban's famous Golden Mile.",
      price: "R700 per person",
      rating: "★★★★☆",
    },
    {
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
      title: "Kruger Safari",
      description: "See the Big Five with experienced guides.",
      price: "R2 200 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80",
      title: "Zipline Adventure",
      description: "Fly through beautiful mountain scenery.",
      price: "R950 per person",
      rating: "★★★★☆",
    },
  ];

  const cultural = [
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      title: "Bo-Kaap Walking Tour",
      description: "Discover Cape Malay history and colourful streets.",
      price: "R650 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
      title: "Cape Malay Cooking",
      description: "Learn to prepare authentic local dishes.",
      price: "R800 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
      title: "Wine Tasting",
      description: "Enjoy award-winning wines in Stellenbosch.",
      price: "R950 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
      title: "Zulu Cultural Village",
      description: "Experience traditional Zulu culture and dance.",
      price: "R750 per person",
      rating: "★★★★☆",
    },
  ];

  const group = [
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
      title: "Sunset Catamaran Cruise",
      description: "Relax with friends while watching the sunset.",
      price: "R700 per person",
      rating: "★★★★★",
    },
    {
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80",
      title: "Beach Volleyball",
      description: "Fun beach games for groups of all sizes.",
      price: "R250 per person",
      rating: "★★★★☆",
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      title: "Escape Room Challenge",
      description: "Solve puzzles together in themed rooms.",
      price: "R350 per person",
      rating: "★★★★☆",
    },
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
      title: "Garden Route Road Trip",
      description: "Explore South Africa's famous coastal route.",
      price: "R1 500 per person",
      rating: "★★★★★",
    },
  ];

  // Combine categories so we can select one based on the URL
  const experiences = {
    outdoor,
    cultural,
    group,
  };

  const selectedExperiences = category
    ? experiences[category]
    : [...outdoor, ...cultural, ...group];

  return (
    <div className="experiences-page">

      <h1>
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Experiences`
          : "Discover Experiences"}
      </h1>

      <p>
        Explore unique South African adventures during your stay.
      </p>

      <div className="experience-grid">

        {selectedExperiences.map((item, index) => (
          <ExperienceItem
            key={index}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}

export default Experiences;