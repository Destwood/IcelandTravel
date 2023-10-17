import React from "react";
import style from "./PageScroller.module.scss";

function PageScroller({ children }) {
  return (
    <div className={style.container} style={{ scrollSnapType: "y mandatory" }}>
      {React.Children.map(children, (child, index) => (
        <div style={{ scrollSnapAlign: "start" }}>{child}</div>
      ))}
    </div>
  );
}

export default PageScroller;
