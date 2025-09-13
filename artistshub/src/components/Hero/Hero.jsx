import React from "react";
import s from "./Hero.module.css";
import images from "../../assets";
import heroImg from "../../assets/hero";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width:1440px)" });
  console.log(isDesktop);
  return (
    <div className={s.section}>
      <div className={s.leftSide}>
        <h1 className={s.description}>
          Discover Your Next Favorite Artist Today
        </h1>
        <p>
          Dive into a world of music discoveries with ArtistsHub – your personal
          guide to the boundless universe of sound. Explore, filter, and learn
          about your favorite artists all in one place.
        </p>
        <p>Explore Artists</p>
      </div>
      <div className={s.rightSide}>
        <ul className="firstWrap">
          <li>
            <img
              src={
                isMobile
                  ? heroImg.mob1
                  : isDesktop
                  ? heroImg.desk1
                  : heroImg.tab1
              }
              alt="artist"
            />
          </li>
          <li>
            <img src={images.people_two} alt="artist" />
          </li>
          <li>
            <img src={images.people_three} alt="artist" />
          </li>
        </ul>
        <ul className="secondWrap"></ul>
      </div>
    </div>
  );
};

export default Hero;
