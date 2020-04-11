import React from "react"
import { Link } from "gatsby"
import Status from "../Status"
import { isLoggedIn } from "../../utils/auth"


import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          >
          <img ng-src="https://lh3.googleusercontent.com/pUwhwsBUkHUa0-8N-iIuWxNL6cqOqXk2nwmuLPDcPv6COGL_62iVMYKubtzc9C_LB4gXbZmeetPDDqypH48c=s512" alt="Intranet - ThoughtWorks" src="https://lh3.googleusercontent.com/pUwhwsBUkHUa0-8N-iIuWxNL6cqOqXk2nwmuLPDcPv6COGL_62iVMYKubtzc9C_LB4gXbZmeetPDDqypH48c=s512"></img>
          
        </Link>
      </h1>
      <Status /> 
    </div>
    <nav role="main" className={styles[`header__nav`]}>  
        {isLoggedIn() &&
          <div>
            <Link to="/app/home" className={styles[`header__link__home__menu`]}>Home</Link>
            <Link to="/app/about" className={styles[`header__link__menu`]}>About</Link>
            <Link to="/app/profile" className={styles[`header__link__menu`]}>Profile</Link>
          </div>
        }
      </nav>
  </header>
)

export default Header
