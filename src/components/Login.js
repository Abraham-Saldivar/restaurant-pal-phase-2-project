import Header from "./Header";
import React, { useState } from "react"
import { users } from "../db.json";

function Login ({users}) {
     // const [firstName, setFirstName] = useState("")
    //const [lastName, setLastName] = useState("") 
   const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    const handleSubmit = (e) => { 
        e.preventDefault()

        
        
       /*  const newLoginEntry = { username, password};
       users.find({newLoginEntry}) => console.log({newLogin}) */

       
    }
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-account">
          <h2> Let's get you signed in.</h2>
              <label> 
                  <input placeholder="Username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
              </label>
              <label>
              <input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
              </label>
              <input type="submit" value="Login" />
      </form>
  </div>
    )
}

export default Login