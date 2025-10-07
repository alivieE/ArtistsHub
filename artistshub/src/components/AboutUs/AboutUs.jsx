import React from "react";
import s from "./AboutUs.module.css";
import images from "../../assets/index";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width:1440px)" });
  console.log(isDesktop);
  return (
    <div className={s.section}>
      <div className="container">
        <div className={s.leftSide}>
            <img className={s.img} src={images.aboutUs}/>
        </div>
        <div className={s.rightSide}>
            <img src={images.aboutUs_logo}/>
            <h1 className={s.mainTitle}>
                About ArtistsHub
            </h1>
            <p className={s.description}>
                At ArtistsHub, our mission is to connect music lovers with the artists they adore. We strive to create a vibrant community where discovering new music is as enjoyable as listening to it.
            </p>          
        </div>
      </div>
    </div>
  );
};

export default Hero;
