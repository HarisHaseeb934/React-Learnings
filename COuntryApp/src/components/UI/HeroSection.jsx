import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container">
        <div className="hero-text">
          <h1>Explore the World, One Country at a time.</h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search. and filter through countries to find the details you need.
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-images">
          <img src="/images/world.png" alt="" />
        </div>
      </div>
    </main>
  );
};
