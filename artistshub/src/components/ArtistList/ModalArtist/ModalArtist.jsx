import React, { useState, useEffect } from "react";
import s from "./ModalArtist.module.css";

const ModalArtist = ({ id }) => {
  const [artist, setArtist] = useState(null);

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
          <img src={artist.strArtistThumb} className={s.strImg} />
          <div>
            <p className={s.intFormedYear}>{artist.intFormedYear}</p>
          </div>
          <div>
                  <p className={s.strGender}>{artist.strGender}</p>
          </div>
          <div>
            <p className={s.members}></p>
          </div>
          <div>
            <p className={s.strLabel}>{artist.strLabel}</p>
          </div>
          <div>
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
