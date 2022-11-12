import React from "react";
import Button from "../ui/button/Button";
import styles from "./avia.module.css";
import SearchForm from "./SearchForm";

const Avia = () => {
  return (
    <div className={styles.container}>
        <SearchForm/>
      <div className={styles.buttonSection}>
        <Button>Найти билеты</Button>
      </div>
    </div>
  );
};

export default Avia;
