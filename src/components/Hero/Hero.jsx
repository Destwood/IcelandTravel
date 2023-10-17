import React from "react";
import style from "./Hero.module.scss";

import arrowDown from "../../assets/arrowDown.svg";
function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h3 className={style.subTitle}>Tourist guide</h3>
        <h1 className={style.title} id="hero">
          Take a wonderful trip to Iceland with us!
        </h1>
        <button className={style.button}>
          Scroll down! <img src={arrowDown} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
