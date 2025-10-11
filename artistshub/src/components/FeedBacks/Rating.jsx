import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Example using react-icons

const StarRating = ({ value, isChange }) => {
  const [rating, setRating] = useState(value);
  const [hoverValue, setHoverValue] = useState(0);

  const stars = Array(5).fill(0); // For a 5-star rating

  const handleClick = (value) => {
    setRating(value);
    // In a real application, you might send this rating to a backend
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div>
      {stars.map((_, index) => {
        const currentValue = index + 1;
        return (
          <FaStar
            key={index}
            size={24}
            color={(hoverValue || rating) >= currentValue ? "gold" : "gray"}
            onClick={() => {
              if (isChange) {
                handleClick(currentValue);
              }
            }}
            onMouseOver={() => {
              if (isChange) {
                handleMouseOver(currentValue);
              }
            }}
            onMouseLeave={(e) => {
              if (isChange) {
                handleMouseLeave(e);
              }
            }}
            style={{ cursor: "pointer" }}
          />
        );
      })}
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default StarRating;
