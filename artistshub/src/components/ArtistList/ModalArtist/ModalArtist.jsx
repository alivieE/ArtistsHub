import React from 'react';
import s from "./ModalArtist.module.css";

const ModalArtist = (id) => {
    return (
        <div className={s.overlay}>
        <p className={s.artistsName}>{artist.strArtist}</p>
                          <p className={s.artistsDescription}>
                            {artist.strBiographyEN}
                          </p>
        </div>
    );
}

export default ModalArtist;
