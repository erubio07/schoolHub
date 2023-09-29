import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/contact">
        Contacto
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Autogestión
      </NavLink>
      <NavLink className={styles.link} to="/about">
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
