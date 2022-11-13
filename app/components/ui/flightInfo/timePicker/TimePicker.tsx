import React, { FC } from "react";

const TimePicker: FC<{props?: any}> = ({ props }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid rgba(183, 186, 193, 1)",
        borderRadius: "10px",
      }}
    >
      <p>09:20 - </p>
      <p>11:05</p>
    </div>
  );
};

export default TimePicker;
