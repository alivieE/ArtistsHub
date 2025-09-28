import React from "react";
import s from "./ModalArtist.module.css";

const ModalArtist = ({ id }) => {
  console.log(id);
  return (
    <div className={s.overlay}>
      {/* <p className={s.artistsName}>{artist.strArtist}</p>
                          <p className={s.artistsDescription}>
                            {artist.strBiographyEN}
                          </p> */}
      <p>{id}</p>
    </div>
  );
};

export default ModalArtist;
