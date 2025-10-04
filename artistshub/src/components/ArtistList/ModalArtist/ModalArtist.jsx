import React, { useState, useEffect } from "react";
import s from "./ModalArtist.module.css";
import images from "../../../assets/index";

const ModalArtist = ({ id, setModalOpen }) => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
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

  useEffect(() => {
    fetch(`https://sound-wave.b.goit.study/api/artists/${id}/alumbs`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAlbums(data);
      });
  }, [id]);
console.log(albums);

  return (
    <>
      <div
        className={`${s.overlay} del`}
        onClick={(e) => {
          if (e.target.classList.contains("del")) {
            setModalOpen(false);
          }
        }}
      >
        {artist && (
          <div className={s.section}>
            <p className={s.name}>{artist.strArtist}</p>
            <img src={artist.strArtistThumb} className={s.strImg}></img>
            <div className={s.part}>
              <p className={s.modalSubtitle}>Years active</p>
              <p className={s.intFormedYear}>{artist.intFormedYear}</p>
            </div>
            <div className={s.part}>
              <p className={s.modalSubtitle}>Sex</p>
              <p className={s.strGender}>{artist.strGender}</p>
            </div>
            <div className={s.part}>
              <p className={s.modalSubtitle}>Country</p>
              <p className={s.members}>{artist.strLabel}</p>
            </div>
            <div className={s.part}>
              <p className={s.modalSubtitle}>Biography</p>
              <p className={s.strLabel}>{artist.strBiographyEN}</p>
            </div>

            <ul className={s.genresList}>
              {artist.genres.map((genre) => {
                return <li className={s.genre}>{genre}</li>;
              })}
            </ul>
            <div></div>
          </div>
        )}
        <button
          className={s.close}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <img src={images.close} />
        </button>
        <div>
          <p>Albums</p>
          <ul>
            {/* {albums.tracklist.map((album) => {
              return <li>{album.strAlbum}</li>;
            })} */}
            </ul>
        </div>
      </div>
    </>
  );
};

export default ModalArtist;
