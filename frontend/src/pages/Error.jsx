import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section>
    <div className="container">
        <h2>404</h2>
        <h2>Sorry Page not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti! Et necessitatibus assumenda harum? Et quibusdam aut unde consequuntur? Ab distinctio illo tempora magnam. Impedit aliquam soluta ipsam dolores dolorum!</p>

        <div>
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problems</NavLink>
        </div>
    </div>
</section>
  )
}

export default Error