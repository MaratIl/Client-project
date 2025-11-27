import React from "react";
import Navbar from "./Navbar";
import "./Header.module.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from './Header.module.css'

function Header({ user, logout }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Регистрация-скелет</div>
      <Navbar className={styles.navMenu} user={user} logout={logout} />
    </header>
  );
}

export default Header;
