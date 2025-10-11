import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from "react";

const Rating = ({ value }) => {

  return (
    <ReactStars
      count={5}
      value={value}
      size={30}
      isHalf={false}
      edit={false} // якщо тільки відображаємо
      activeColor="#9b5de5" // фіолетовий
      color="#ffffff" // білі зірки
    />
  );
};

export default Rating;