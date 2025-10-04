import React, { useState, useEffect } from "react";
import s from "./ModalArtist.module.css";

const ModalArtist = ({ id }) => {
  console.log(id);

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
      {id && (
        <div className={s.section}>
          <p className={s.name}>{id.strArtist}</p>
          <img src={id.strArtistThumb} className={s.strImg}></img>
          <div>
            <p>Years active</p>
            <p className={s.intFormedYear}>{id.intFormedYear}</p>
          </div>
          <div>
            <p>Sex</p>
            <p className={s.strGender}>{id.strGender}</p>
          </div>
          <div>
            <p>Country</p>
            <p className={s.members}></p>
          </div>
          <div>
            <p>Biography</p>
            <p className={s.strLabel}>{id.strLabel}</p>
          </div>
          <div>
            <p>Years active</p>
            <p className={s.biography}>{id.strBiographyEN}</p>
          </div>
          {id.genres.map((genre) => {
            return <li className={s.genre}>{genre}</li>;
          })}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ModalArtist;
