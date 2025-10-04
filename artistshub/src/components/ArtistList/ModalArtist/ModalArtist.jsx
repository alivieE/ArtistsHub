import React, { useState, useEffect } from "react";
import s from "./ModalArtist.module.css";

const ModalArtist = ({ id }) => {
  const [artist, setArtist] = useState(null);
  console.log(artist);

  useEffect(() => {
    fetch(`https://sound-wave.b.goit.study/api/artists/${id}`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArtist(data);
      });
  }, [id]);

  return (
    <div className={s.overlay}>
      {artist && (
        <div className={s.section}>
          <p className={s.name}>{artist.strArtist}</p>
          <img src={artist.strArtistThumb} className={s.strImg}></img>
          <div>
            <p>Years active</p>
            <p className={s.intFormedYear}>{artist.intFormedYear}</p>
          </div>
          <div>
            <p>Sex</p>
            <p className={s.strGender}>{artist.strGender}</p>
          </div>
          <div>
            <p>Country</p>
            <p className={s.members}></p>
          </div>
          <div>
            <p>Biography</p>
            <p className={s.strLabel}>{artist.strLabel}</p>
          </div>
          <div>
            <p>Years active</p>
            <p className={s.biography}>{artist.strBiographyEN}</p>
          </div>
          {artist.genres.map((genre) => {
            return <li className={s.genre}>{genre}</li>;
          })}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ModalArtist;
