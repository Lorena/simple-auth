import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"
import styles from "./profile.module.css"

const Profile = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="You are welcome!">
      <p>Welcome back to your profile, <span className={styles[`profile__name`]}>{name}</span>!</p>
      <p>
        This is a profile test. You could set up a form to save information
        about you.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
  )
}

export default Profile
