import React from "react"
import styles from "./form.module.css"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/home`)
    }}
  >
    <p className={styles[`form__instructions`]}>
      For this demo, please log in with the username <code>jim</code> and the
      password <code>123456</code>. <br /> Or log in with the username <code>mee</code> and the
      password <code>654321</code> to have the publish experience. <br /> And if do you want to have admin experencie
      log in with the username <code>admin</code> and the password <code>lalala</code>
    </p>
    <label className={styles[`form__label`]}>
      Username
      <input
        className={styles[`form__input`]}
        type="text"
        name="username"
        onChange={handleUpdate}
      />
    </label>
    <label className={styles[`form__label`]}>
      Password
      <input
        className={styles[`form__input`]}
        type="password"
        name="password"
        onChange={handleUpdate}
      />
    </label>
    <input className={styles[`form__button`]} type="submit" value="Log In" />
  </form>
)
