import React from "react";
import styles from './travel-info.module.css'

const TravelInfo = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
        <p>SVO</p>
        <p>ROV</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#C4C4C4",
            height: "8px",
            width: "8px",
            borderRadius: "100%",
          }}
        ></div>
        <div
          style={{ backgroundColor: "#C4C4C4", height: "2px", width: "270px" }}
        ></div>
        <div
          style={{
            backgroundColor: "#C4C4C4",
            height: "8px",
            width: "8px",
            borderRadius: "100%",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>В пути 1 ч 55 мин</p>
      </div>
    </div>
  );
};

export default TravelInfo;
