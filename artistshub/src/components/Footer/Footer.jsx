import React from 'react';
import s from './Footer.module.css';
import images from "../../assets";

const Footer = () => {
    return (
        <div className="container">
              <div className={s.footer}>
                <div className={s.logoWrap}>
                  <img src={images.SubtractFooter} alt="logo" />
                  <p className={s.SubtractFooterText}>ArtistsHub</p>
                </div>
        
                <div className={s.bigMenu}>
                  <nav>
                    <ul className={s.bigMenuList}>
                      <li>
                        <a href="#artists" className={s.link}> Artists</a>
                      </li>
                      <li>
                        <a href="#about" className={s.link}> About Us</a>
                      </li>
                      <li>
                        <a href="#reviews" className={s.link}> Reviews</a>
                      </li>
                    </ul>
                  </nav>
                </div>   
                <div>
                    <div className={s.footerDesc}>
                      <div className={s.mediaLinks}>
                        <img src={images.Instagram}/>
                        <img src={images.Facebook}/>
                        <img src={images.Youtube}/>
                      </div>                        
                        <p>© 2025 ArtistsHub. All rights reserved.</p>
                    </div>
                    
                </div>     
              </div>
        </div>
          );
        };

export default Footer;
