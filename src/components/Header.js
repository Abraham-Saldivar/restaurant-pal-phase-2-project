import { NavLink } from "react-router-dom";

function Header () {
  return (
    <nav>
        <NavLink exact to="/"><h1>Restaurant Pal</h1></NavLink>
        <div className="navBar">
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/create-page">Get Started</NavLink>
        </div>
    </nav>
  )
}

export default Header