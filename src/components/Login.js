import Header from "./Header";
import React, { useEffect, useState } from "react"


function Login ({setUser}) {
     // const [firstName, setFirstName] = useState("")
    //const [lastName, setLastName] = useState("") 
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [allData, setAllData]  = useState([])
    
useEffect(() => {
fetch(`http://localhost:3000/users`)
.then(res => res.json())
.then(data => setAllData(data))
},[])
function handleSubmit(e) { 
        e.preventDefault()
   
   
    const userObj = allData.find(userObj => userObj.username === username && userObj.password === password)
    
    { userObj  ?  setUser(userObj.id) : alert("Invalid Login")}

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

export default Login;
