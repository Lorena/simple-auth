import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"

const Layout = ({ children }) => (
  <div className={styles.wrap_header_main}>
    <Helmet title="Simple Authentication With Gatsby" />
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)

export default Layout
