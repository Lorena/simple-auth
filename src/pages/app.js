import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import About from "../components/About"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/about" component={About}/>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/home" component={Home} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
