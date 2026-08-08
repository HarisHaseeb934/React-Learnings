import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return(
            <main>
      <div>
        <div>
          <h1>Explore the World, One Country at a time.</h1>
          <p>
            Discover the history, culture and beauty of every nation.
            Sort,search, and filter through continents to find the details you
            need{" "}
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div>
            <img src="/images/world.png" alt="" />
        </div>
      </div>
    </main>
    )
}