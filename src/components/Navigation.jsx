import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="navigation">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/car" className="nav-link middle">
        Car
      </NavLink>
      <NavLink to="/soundboard" className="nav-link">
        Soundboard
      </NavLink>
    </nav>
  )
}

export default Navigation
