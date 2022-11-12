import React, { FC } from "react";
import { IInput } from "../../types/input.interface";
import styles from "./input.module.css";

const Input: FC<IInput> = ({ title, style, ...rest }) => {
  return (
    <div style={style}>
      <p className={styles.title}>{title}</p>
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default Input;
