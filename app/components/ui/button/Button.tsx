import React, { FC, PropsWithChildren } from "react";
import { IButton } from "../../types/button.interface";
import styles from './button.module.css'

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  return <button className={styles.btn} {...rest}>{children}</button>;
};

export default Button;
