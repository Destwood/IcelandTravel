import React, { useState } from "react";
import style from "./Tours.module.scss";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import img1 from "../../assets/toures1.png";
import img2 from "../../assets/toures2.png";
import img3 from "../../assets/toures3.png";

function Tours() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOrder, setImageOrder] = useState([0, 1, 2]);

  const changeImageOrder = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }

    // Змінюємо порядок картинок в окремому масиві imageOrder
    const newImageOrder = imageOrder.map(
      (order) => (order + 1) % images.length
    );
    setImageOrder(newImageOrder);
  };

  return (
    <div className={style.container} id="tours">
      <div className={style.content}>
        <h3 className={style.subTitle}>Tours</h3>
        <h1 className={style.title}>Get to know our tours!</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
        <button
          className={style.button}
          onClick={() => changeImageOrder("next")}
        >
          Learn more <img className={style.animated} src={arrowRight} alt="" />
        </button>
      </div>
      <div className={style.imgContainer}>
        <div className={style.slider}>
          {imageOrder.map((order, index) => (
            <img
              key={order}
              className={style.item}
              src={images[order]}
              alt={`pic ${order + 1}`}
            />
          ))}
        </div>
        <div className={style.buttons}>
          <button
            className={style.button}
            onClick={() => changeImageOrder("prev")}
          >
            <img className={style.icon} src={arrowLeft} alt="" />
          </button>
          <div className={style.displayed}>
            {currentIndex + 1}/{images.length}
          </div>
          <button
            className={style.button}
            onClick={() => changeImageOrder("next")}
          >
            <img className={style.icon} src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tours;
