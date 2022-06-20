import { FC } from "react";

import Navbar from "./Navbar";

import styles from "../styles/components/Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
