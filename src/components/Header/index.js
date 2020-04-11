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
            <Link to="/app/clients" className={styles[`header__link__menu`]}>Clients</Link>
            <Link to="/app/demand" className={styles[`header__link__menu`]}>Demand</Link>
            <Link to="/app/policies" className={styles[`header__link__menu`]}>Policies</Link>
            <Link to="/app/news" className={styles[`header__link__menu`]}>News</Link>
            <Link to="/app/about" className={styles[`header__link__menu`]}>About</Link>
          </div>
        }
      </nav>
  </header>
)

export default Header
