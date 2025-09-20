import React from "react";
import s from "./ArtistList.module.css";

const ArtistList = () => {
  return (
    <div className={s.section}>
      <div className="container">
        <p className={s.span}>Artists</p>
        <h2 className={s.sectionTitle}>Explore Your New Favorite Artists</h2>
        <ul>
          <li>
            <img></img>
            <ul className={s.genresList}>
              <li className={s.genres}></li>
            </ul>
            <p className={s.artistsName}></p>
            <p className={s.artistsDescription}></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArtistList;
