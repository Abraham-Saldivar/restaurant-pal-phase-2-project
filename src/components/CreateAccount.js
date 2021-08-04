import React, { useState } from "react"
import { useHistory } from "react-router-dom";

/* e.preventDefault()
const userObj = allData.find(userObj => userObj.username === username && userObj.password === password)
{ userObj  ?  logIn(userObj) : alert("Invalid Login")}
}
 */
function CreateAccount() {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
     const [allData, setAllData]  = useState([])
     
     let history = useHistory();
        
    const handleSubmit = (e) => { 
        e.preventDefault()
        const newAccount = { username, password};
        console.log(newAccount)
        const userNameLookUp = allData.find(userObj => userObj.username === username)
        {userNameLookUp ? console.log("Didn't exist") : alert("Username is taken. Sorry, try again!")}
        
        fetch("http://localhost:3000/users" , {
            method: "POST" , 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(newAccount)
        })
          history.push("/create-page");
      
          
    }
    function handleExistingAccount(){
        history.push("/login")
    }

    
        return (
        <div>
              <form onSubmit={handleSubmit} className="new-account">
                <h2> Time to create your account!</h2>
                    <label> 
                        <input placeholder="Username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                    <input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <input type="submit" value="Create your new account!" />
            </form>
            <button onClick={handleExistingAccount}>Already have a account? Sign in. </button>
        </div>
 
 )
}

export default CreateAccount