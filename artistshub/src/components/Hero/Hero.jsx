import React from 'react';
import s from './Hero.module.css';
import images from '../../assets';

const Hero = () => {
    return (
        <div className={s.section}>
            <div className={s.leftSide}>
                <h1 className={s.description}>Discover Your Next Favorite Artist Today</h1>
                <p>Dive into a world of music discoveries with ArtistsHub – your personal guide to the boundless universe of sound. Explore, filter, and learn about your favorite artists all in one place.</p>
                <p>Explore Artists</p>
            </div>
            <div className={s.rigthSide}>

            </div>
        </div>
    );
}

export default Hero;
