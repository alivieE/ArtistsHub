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
      <div className={s.topGradient}></div>
      <div className={s.bottomGradient}></div>
      <div className="container">
        <div className={s.leftSide}>
          <h1 className={s.mainTitle}>
            Discover Your Next Favorite Artist Today
          </h1>
          <p className={s.description}>
            Dive into a world of music discoveries with ArtistsHub – your
            personal guide to the boundless universe of sound. Explore, filter,
            and learn about your favorite artists all in one place.
          </p>
          <button className={s.button} type="button">
            Explore Artists
            <img src={heroImg.icon} alt="icon" />
          </button>
        </div>
        <div className={s.rightSide}>
          <ul className={s.firstWrap}>
            <li>
              <img
                className={s.img}
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
              <img
                className={s.img}
                src={
                  isMobile
                    ? heroImg.mob2
                    : isDesktop
                    ? heroImg.desk2
                    : heroImg.tab2
                }
                alt="artist"
              />
            </li>
            <li>
              <img
                className={s.img}
                src={
                  isMobile
                    ? heroImg.mob3
                    : isDesktop
                    ? heroImg.desk3
                    : heroImg.tab3
                }
                alt="artist"
              />
            </li>
          </ul>
          <ul className={s.secondWrap}>
            <li>
              <img
                className={s.img}
                src={
                  isMobile
                    ? heroImg.mob4
                    : isDesktop
                    ? heroImg.desk4
                    : heroImg.tab4
                }
                alt="artist"
              />
            </li>
            <li>
              <img
                className={s.img}
                src={
                  isMobile
                    ? heroImg.mob5
                    : isDesktop
                    ? heroImg.desk5
                    : heroImg.tab5
                }
                alt="artist"
              />
            </li>
            <li>
              <img
                className={s.img}
                src={
                  isMobile
                    ? heroImg.mob6
                    : isDesktop
                    ? heroImg.desk6
                    : heroImg.desk6
                }
                alt="artist"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
