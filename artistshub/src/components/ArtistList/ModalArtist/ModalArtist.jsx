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
    fetch(`https://sound-wave.b.goit.study/api/artists/${id}/albums`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAlbums(data.albumsList);
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
            <div className={s.albumsList}>
              <p className={s.albums}>Albums</p>
              <ul className={s.albumsList}>
                {albums &&
                  albums.map((album) => {
                    return (
                      <li className={s.album}>
                        <p className={s.albumTitle}>{album.strAlbum}</p>
                        <div className={s.info}>
                          <div className={s.infoWrapOne}>
                            <p className={s.infotext}>Track</p>
                          </div>
                          <div className={s.infoWrapTwo}>
                            <p className={s.infotext}>Time</p>
                            <p className={s.infotext}>Link</p>
                          </div>
                        </div>
                        <ul className={s.tracks}>
                          {album.tracks.map((track) => {
                            const videoDuration = track.intDuration;
                            const time = Math.floor(videoDuration / 1000);
                            const formatted = `${Math.floor(time / 60)}:${(
                              time % 60
                            )
                              .toString()
                              .padStart(2, "0")}`;
                            return (
                              <div className={s.track}>
                                <li className={s.trackName}>
                                  {track.strTrack}
                                </li>
                                <div className={s.trackTL}>
                                  <li className={s.trackTime}>{formatted}</li>
                                  <li className={s.trackLink}>
                                    <div className={s.videoLink}>
                                      <a
                                        rel="noreferrer noopener nofollow"
                                        href={
                                          track.movie ||
                                          `https://www.youtube.com/results?search_query=${
                                            artist.strArtist + track.strTrack
                                          }`
                                        }
                                        target="_blank"
                                      >
                                        {<img src={images.video} />}
                                      </a>
                                    </div>
                                  </li>
                                </div>
                              </div>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </div>
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
      </div>
    </>
  );
};

export default ModalArtist;
