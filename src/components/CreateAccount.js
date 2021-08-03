import React, { useState } from "react"
function CreateAccount() {
    /* const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("") */
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    const handleSubmit = (e) => { 
        e.preventDefault()
        const newAccount = { username, password};
        console.log(newAccount)

        fetch("http://localhost:3000/users" , {
            method: "POST" , 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(newAccount)
          })
          
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
        </div>
 
 )
}

export default CreateAccount