import React from "react";
import s from "./Header.module.css";
import images from "../../assets";

const Header = () => {
  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.logoWrap}>
          <img src={images.Subtract} alt="logo" />
          <p>ArtistsHub</p>
        </div>
        <div className={s.nav}>
          <a>Artists</a>
          <a>About Us</a>
          <a>Reviews</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
