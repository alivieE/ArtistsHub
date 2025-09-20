import React, { useState, useEffect } from "react";
import s from "./ArtistList.module.css";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://sound-wave.b.goit.study/api/artists?limit=10&page=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArtists(data.artists);
      });
  }, []);
  return (
    <div className={s.section}>
      <div className="container">
        <p className={s.span}>Artists</p>
        <h2 className={s.sectionTitle}>Explore Your New Favorite Artists</h2>
        <ul>
          {artists.length > 0 &&
            artists.map((artist) => {
              return (
                <li>
                  <img src={artist.strArtistThumb}></img>
                  <ul className={s.genresList}>
                    {artist.genres.map((genre) => {
                      return <li className={s.genre}>{genre}</li>;
                    })}
                  </ul>
                  <p className={s.artistsName}>{artist.strArtist}</p>
                  <p className={s.artistsDescription}>
                    {artist.strBiographyEN}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ArtistList;
