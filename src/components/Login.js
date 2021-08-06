import Header from "./Header";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


function Login ({ allData, userObj, setUserObj }) {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
let history = useHistory();



function handleSubmit(e) { 
    e.preventDefault()
    const validateUserObj = allData.find(obj => obj.username === username && obj.password === password)
    { validateUserObj  ?  logIn(validateUserObj) : alert("Invalid Login")}
}

function logIn(validateUserObj) {
    setUserObj(validateUserObj)
    history.push("/create-page");
}
    function handleNewAccount(){
        history.push("/create-account")
    }


return (
    <div >
        <Header setUserObj={setUserObj} userObj={userObj}/>

        <div className="login-container">
            <form onSubmit={handleSubmit} className="login">
                <h2 className="login-header"> Let's get you signed in.</h2>
                
                <div className="login-form-container">
                    <label className="login-form-label">Username</label>
                        <input placeholder="Username" className="login-form-input" value={username} type="text" onChange={(e) => setUsername(e.target.value)} required/>
                    <label className="login-form-label">Password</label>
                        <input placeholder="Password" className="login-form-input" value={password} type="password" onChange={(e) => setPassword(e.target.value)} required/>
                    <input className="styled-button" type="submit" value="Login" />
                    <button className="login-sign-button" onClick={handleNewAccount}>Don't have a account? Sign up here.</button>
                </div>
             </form>
        </div>
  </div>
    )
}

export default Login;
