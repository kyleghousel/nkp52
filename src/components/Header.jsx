import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div id="header">
       <NavLink to="/nicar" className="text-decoration-none">
        <h1 className="niharchives-title">N I H A R C H I V E S</h1>
      </NavLink>
      <nav id="navigation">
        <NavLink to="/" end className="nav-link px-4 py-2">
          Home
        </NavLink>
        <NavLink to="/car" className="nav-link px-4 py-2">
          Car
        </NavLink>
        <NavLink to="/soundboard" className="nav-link px-4 py-2">
          Soundboard
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
