import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return <nav className={styles.nav}>
    <div className={styles.container}>
      <span className={styles.brand}>HikoCinema</span>

      <ul className={styles.navMenu}>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
        <li className={styles.menuItem}>Lists</li>
      </ul>
    </div>
  </nav>;
}
