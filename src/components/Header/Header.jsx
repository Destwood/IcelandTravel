import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import accout from "../../assets/Account.svg";
function Header() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 200, 1); // Фон стає видимим після прокрутки 100px
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={style.container}
      style={{ backgroundColor: `rgba(11, 29, 38, ${scrollOpacity})` }}
    >
      <a href="/">
        <img className={style.logo} src={logo} alt="" />
      </a>

      <div className={style.links}>
        <a href="#hero" className={style.link}>
          General
        </a>
        <a href="#about" className={style.link}>
          About
        </a>
        <a href="#tours" className={style.link}>
          Tours
        </a>
        <a href="#blog" className={style.link}>
          Blog
        </a>
      </div>
      <a href="/" className={style.account}>
        <img src={accout} alt="" />
        Accout
      </a>
    </header>
  );
}

export default Header;
