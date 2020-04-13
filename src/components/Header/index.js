import React from "react"
import { Link } from "gatsby"
import Status from "../Status"
import { isLoggedIn, isPublisher, isAdmin } from "../../utils/auth"
import logo from './logo.png'
import adminicon from './admin.png'
import publiscontent from './publish-content.png'


import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          >
          <img alt="Intranet - ThoughtWorks" src={logo}></img>
          
        </Link>
      </h1>

      <div className={styles[`header__settings__menu`]}>
      {isPublisher() &&
            <Link to="/app/publish">
              <img  className={styles[`header__link__publish__menu`]} src={publiscontent}/>
            </Link>
       }
       {isAdmin() &&
            <Link to="/app/admin">
              <img  className={styles[`header__link__admin__menu`]} src={adminicon}/>
            </Link>
       }
      </div>

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
