import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  console.log("Rest explodido", {...rest})
  console.log("Component Details", <Component {...rest} />)

  //Usar o objeto explodido na linha de baixo, evita passar cada atributo.
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

/*
Objeto explodido
props = {
  url: "blah/local",
  name: "blah",
  path: "/",
}

<Component url="blah/local" name="blah" path="/" />

<Component {...props}

[...props, cachorro = Cocker]

clientList = [{ 
  clientName: 'LATAM', 
  clientPrincipal: ásfasdf',
  bleh: 'laosaso'
},
{ 
  clientName: 'GAP', 
  clientPrincipal: ásfasdf',
  bleh: 'laosaso'
}]

clientList.append({ 
  clientName: 'LOTUS', 
  clientPrincipal: ásfasdf',
  bleh: 'laosaso'
});


[...clientLists, { 
  clientName: 'LOTUS', 
  clientPrincipal: ásfasdf',
  bleh: 'laosaso'
}]


props = { cachorro = Cocker }
*/