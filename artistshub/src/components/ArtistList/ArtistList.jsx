import React from "react";
import s from "./ArtistList.module.css";
const ArtistList = () => {
  return (
    <div className={s.section}>
      <div className="container">
        <p className={s.span}>Artists</p>
        <h2 className={s.sectionTitle}>Explore Your New Favorite Artists</h2>
      </div>
    </div>
  );
};

export default ArtistList;
