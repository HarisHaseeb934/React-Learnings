import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="w-full">
      <div className="max-w-4xl w-full m-auto flex flex-col md:flex-row justify-between items-center my-5 p-5 gap-3">
        <div className="hero-text">
          <h1 className="text-xl text-[#66BB6A]">Explore the World, One Country at a time.</h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search. and filter through countries to find the details you need.
          </p>
          <button className="flex justify-center items-center p-3 bg-[#66BB6A] rounded my-5">
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
