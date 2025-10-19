import React, { useState } from "react";
import { Star } from "lucide-react";

const RatingStars = () => {
  const [rating, setRating] = useState(0); // поточний вибір
  const [hover, setHover] = useState(0);   // наведення


  return (
    <div className="flex flex-col items-center space-y-3">

      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={40}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`cursor-pointer transition-all duration-200 ${
              star <= (hover || rating)
                ? "text-yellow-400 fill-yellow-400 scale-110"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>


      <button
        disabled={rating === 0}
        className="bg-blue-500 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-600 disabled:opacity-50"
      >
        {`rating ? Надіслати ${rating}★ : "Оберіть рейтинг"`}
      </button>
    </div>
  );
};

export default RatingStars;