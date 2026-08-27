import { useState } from "react";

const Number_Of_Stars = 5;

const StarRating = ({ value = 0, maxStars = Number_Of_Stars, onChange }) => {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  function handleChange(index) {
    const selectedRating = index + 1;
    setRating(selectedRating);
    if (onChange) onChange(selectedRating);
  }

  return (
    <div className="star">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        // Determines active state based on hover first, then standard rating
        const isActive = starValue <= (hover || rating);

        return (
          <button
            key={index}
            type="button"
            className={isActive ? "active" : ""}
            onClick={() => handleChange(index)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill={isActive ? "#FFD700" : "none"}
              stroke="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;