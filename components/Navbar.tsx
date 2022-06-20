import { FC } from "react";

import styles from "../styles/components/Navbar.module.scss";


const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;
