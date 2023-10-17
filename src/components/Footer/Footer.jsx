import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <a href="/">
          <img className={style.logo} src={logo} alt="" />
        </a>

        <p className={style.desc}>
          The world is a book, and he who does not travel reads only one page.
        </p>
        <div className={style.addInfo}>
          <p>Copyright © Iceland Travel 2019 All rights reserved</p>
          <p>Design by Kalabin Timur</p>
        </div>
      </div>
      <div className={style.links}>
        <div className="">
          <h4 className={style.linksTitle}>Chapters</h4>
          <a href="#hero">Main</a>
          <a href="#about">About us</a>
          <a href="#tours">Tours</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="">
          <h4 className={style.linksTitle}>More about us</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Contacts</a>
          <a href="/">Team</a>
          <a href="/">Vacancies</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
