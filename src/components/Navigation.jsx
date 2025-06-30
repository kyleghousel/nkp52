import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="navigation">
      <NavLink to="/" end className="nav-link px-4 py-2">
        Home
      </NavLink>
      <NavLink to="/car" className="nav-link px-4 py-2 middle">
        Car
      </NavLink>
      <NavLink to="/soundboard" className="nav-link px-4 py-2">
        Soundboard
      </NavLink>
    </nav>
  )
}

export default Navigation
