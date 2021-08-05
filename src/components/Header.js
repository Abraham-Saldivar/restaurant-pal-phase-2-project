import { NavLink } from "react-router-dom";

function Header () {
  return (
    <nav className="global-nav">
        <NavLink exact to="/"><h1>Restaurant Pal</h1></NavLink>
        <div className="navBar">
          <NavLink activeClassName="active" exact to="/login">Login</NavLink>
          <NavLink activeClassName="active" exact to="/create-account">Create Account</NavLink>
        </div>
    </nav>
  )
}

export default Header