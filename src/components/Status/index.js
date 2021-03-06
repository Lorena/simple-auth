import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className={styles[`status__text`]}>

        <Link to="/app/profile" className={styles[`status__link__user`]}>{name} - {email} </Link>
        <br/>
        {` `}
        <a
          href="/"
          className={styles[`status__logout`]}
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Log Out
        </a>

      </p>
    )
  }

  return <div className={styles.status}>{details}</div>
}
