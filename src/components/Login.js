import Header from "./Header";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


function Login ({setUser, setRestaurantData}) {

     // const [firstName, setFirstName] = useState("")
    //const [lastName, setLastName] = useState("") 
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [allData, setAllData]  = useState([])
let history = useHistory();

    
useEffect(() => {
fetch(`http://localhost:3000/users`)
.then(res => res.json())
.then(data => setAllData(data))
},[])


function handleSubmit(e) { 
    e.preventDefault()
    const userObj = allData.find(userObj => userObj.username === username && userObj.password === password)
    { userObj  ?  logIn(userObj) : alert("Invalid Login")}
}

function logIn(userObj) {
    console.log('login! user id: ' + userObj.id)
    console.log(userObj)
    setRestaurantData(userObj.data)
    setUser(userObj.id)
    history.push("/create-page");
}
    


return (
        <div>
        <Header />
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
