import React from "react"
import { Link } from "gatsby"
import Status from "../Status"

import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          Lorena | Intranet
        </Link>
      </h1>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/app/home" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/about" className={styles[`header__link`]}>
          About
        </Link>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link>
      </nav>
    </div>
    <Status />
  </header>
)

export default Header
