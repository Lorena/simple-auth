const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `jim` && password === `123456`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: `jim@example.org`,
      role: `all`,
    })
  }

  if (username === `mee` && password === `654321`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Mee`,
      legalName: `Meenakshi K. User`,
      email: `meenakshi@example.com`,
      role: `publisher`,
    })
  }

  if (username === `admin` && password === `lalala`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Administer`,
      legalName: `Admin K. User`,
      email: `admin@example.com`,
      role: `admin`,
    })
  }

  return false
}

export const isAdmin = () => {
  if (!isBrowser) return false

  const user = getUser()

  return user.role == `admin`
}

export const isPublisher = () => {
  if (!isBrowser) return false

  const user = getUser()

  return user.role == `publisher`
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}
