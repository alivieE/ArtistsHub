import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import images from "../../assets";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.logoWrap}>
          <img src={images.Subtract} alt="logo" />
          <p>ArtistsHub</p>
        </div>

        <div className={s.bigMenu}>
          <nav>
            <ul>
              <li>
                <a href="#"> artists</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={s.menu}>
          <input
            onClick={() => {
              setisOpenMenu(!isOpenMenu);
            }}
            type="checkbox"
            id="burgerCheckbox"
            className={s.burgerCheckbox}
            checked={isOpenMenu}
          />

          <label for="burgerCheckbox" className={s.burger}></label>
          {isOpenMenu && <div className={s.wrap}></div>}
          <div className={`${s.overlay} ${isOpenMenu ? s.open : ""}`}>
            <nav class={s.nav}>
              <ul class={s.menuList}>
                <li
                  class={s.menuItem}
                  onClick={() => {
                    setisOpenMenu(!isOpenMenu);
                  }}
                >
                  <a href="#" className={s.menu_item}>
                    Artists
                  </a>
                </li>
                <li
                  class={s.menuItem}
                  onClick={() => {
                    setisOpenMenu(!isOpenMenu);
                  }}
                >
                  <a href="#" className={s.menu_item}>
                    About Us
                  </a>
                </li>
                <li
                  class={s.menuItem}
                  onClick={() => {
                    setisOpenMenu(!isOpenMenu);
                  }}
                >
                  <a href="#" className={s.menu_item}>
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
