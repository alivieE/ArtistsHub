import React, { useState, useEffect } from "react";
import s from "./ArtistList.module.css";
import images from "../../assets/hero/index";
import ModalArtist from "./ModalArtist/ModalArtist";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(false);
  useEffect(() => {
    fetch(`https://sound-wave.b.goit.study/api/artists?limit=10&page=${page}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArtists((prev) => {
          return [...prev, ...data.artists];
        });
      });
  }, [page]);
  return (
    <div className={s.section}>
      <div className="container">
        <p className={s.span}>Artists</p>
        <h2 className={s.sectionTitle}>Explore Your New Favorite Artists</h2>
        <ul>
          {artists.length > 0 &&
            artists.map((artist) => {
              return (
                <li className={s.ArtistList}>
                  <img src={artist.strArtistThumb} className={s.strImg}></img>
                  <ul className={s.genresList}>
                    {artist.genres.map((genre) => {
                      return <li className={s.genre}>{genre}</li>;
                    })}
                  </ul>
                  <p className={s.artistsName}>{artist.strArtist}</p>
                  <p className={s.artistsDescription}>
                    {artist.strBiographyEN}
                  </p>
                  <button
                    className={s.learnMore}
                    onClick={() => {
                      console.log(artist);
                      setId(artist._id);
                      setModalOpen(!modalOpen);
                    }}
                  >
                    Learn More <img src={images.caret_right} />
                  </button>
                </li>
              );
            })}
        </ul>
        <button
          className={s.loadMore}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More <img src={images.down_arrow_alt} />
        </button>
      </div>
      {modalOpen && <ModalArtist id={id}></ModalArtist>}
    </div>
  );
};

export default ArtistList;
