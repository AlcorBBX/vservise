import React from "react";
import styles from "./avio-info.module.css";
import Photo from "../../../../public/лого.jpg";

{
  /* <img src='/baggage.svg' alt=''/>
<img src='/bag.svg' alt=''/> */
}

const AvioInfo = () => {
  return (
    <div style={{ display: "flex", width: '950px', height: '200px' }}>
      <div>
        <p>Невозвратный</p>
        <img src='/logo.jpg' alt='title' />
        <p>S7 Airlines</p>
      </div>
      <div>
        <div>fsdfsddf</div>
        <div>fsdfsdf</div>
      </div>
      <p>4 150 ₽</p>
    </div>
  );
};

export default AvioInfo;
