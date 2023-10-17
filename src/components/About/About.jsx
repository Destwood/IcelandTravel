import React from "react";
import style from "./About.module.scss";
import img from "../../assets/about.png";
import arrowRight from "../../assets/arrowRight.svg";
function About() {
  return (
    <div className={style.container} id="about">
      <div className={style.content}>
        <h3 className={style.subTitle}>About</h3>
        <h1 className={style.title}>
          Take a wonderful trip to Iceland with us!
        </h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <button className={style.button}>
          Learn more <img src={arrowRight} alt="" />
        </button>
      </div>
      <img className={style.img} src={img} alt="" />
    </div>
  );
}

export default About;
