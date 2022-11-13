import React from "react";
import FlightInfo from "../../ui/flightInfo/FlightInfo";
import TimePicker from "../../ui/flightInfo/timePicker/TimePicker";
import TravelInfo from "../../ui/flightInfo/travelInfo/TravelInfo";
import styles from "./avio-info.module.css";

{
  /* <img src='/baggage.svg' alt=''/>
<img src='/bag.svg' alt=''/> */
}

const AvioInfo = () => {
  return (
    <div className={styles.container}>
      {/* <div> */}

      <div className={styles.one}>
        <p>Невозвратный</p>
        <div className={styles.logoSection}>
          <img className='' src='/logo.jpg' alt='title' />
          <p className=''>S7 Airlines</p>
        </div>
      </div>
      <div className={styles.two}>
        <div style={{ display: "flex" }}>
          <FlightInfo />
          <TravelInfo />
          <FlightInfo />
        </div>

        <div style={{ display: "flex" }}>
          <TimePicker props='true' />
          <TimePicker props='true' />
          <TimePicker props='true' />
        </div>
      </div>

      {/* </div> */}
      <div className={styles.tree}>
        <p className={styles.cost}>4 150 ₽</p>
      </div>
    </div>
  );
};

export default AvioInfo;
