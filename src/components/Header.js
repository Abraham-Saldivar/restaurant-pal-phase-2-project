import { NavLink } from "react-router-dom";

function Header ({user,setUser}) {
  return (
    <nav className="global-nav">
        <div>
          <div className="header-logo">
            <svg width="28" height="28" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3064 37.1343C9.18308 35.2447 0.875 27.7521 0.875 18.797C0.875 8.4157 12.04 0 25.8127 0C39.5854 0 50.7504 8.4157 50.7504 18.797C50.7504 27.7349 42.4742 35.2158 31.3831 37.1233C42.5367 37.7725 50.8749 40.3737 50.8749 43.4837C50.8749 47.0826 39.71 50 25.9373 50C12.1646 50 0.999581 47.0826 0.999581 43.4837C0.999581 40.3909 9.24568 37.8013 20.3064 37.1343Z" fill="#D1770A"/>
            </svg>
            <NavLink exact to="/"><h1>Restaurant Pal</h1></NavLink>
          </div>
        </div>
        
        <div className="navBar">
        {!user ?  <> <NavLink activeClassName="active" exact to="/login">Login</NavLink> <NavLink activeClassName="active" exact to="/create-account"> Create Account</NavLink> </> :  <NavLink onClick={() => setUser(null)} exact to="/">Logout</NavLink>}
        </div>
    </nav>
  )
}

export default Header


/* import { NavLink } from "react-router-dom";


function Header ({user, setUser}) {
  console.log("header rendered")
  
  return (
    <nav className="global-nav">
        <NavLink exact to="/"><h1>Restaurant Pal</h1></NavLink>
        <div className="navBar">
          {!user ?  <> <NavLink activeClassName="active" exact to="/login">Login</NavLink> <NavLink activeClassName="active" exact to="/create-account"> Create Account</NavLink> </> :  <NavLink onClick={() => setUser(null)} exact to="/">Logout</NavLink>}
        </div>
    </nav>
  )
  console.log(user)
}

export default Header */