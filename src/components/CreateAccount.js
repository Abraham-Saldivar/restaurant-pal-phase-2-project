import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import Header from "./Header";

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
        

    useEffect(() => {
        console.log('useEffect fired')
        fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(setAllData)
    }, [])


    const handleSubmit = (e) => { 
        e.preventDefault()
        const data = {
                        name: "Gigi's Hollywood",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur enim eget erat consectetur accumsan. Sed faucibus lectus orci, eget varius nunc dictum non.",
                        backgroundImage: "https://previews.123rf.com/images/annavaczi/annavaczi1501/annavaczi150100018/35325651-delicious-food-on-white-plate-close-up.jpg",
                        logoImage: "https://i.stack.imgur.com/kJSXT.png",
                        menuImage: "https://eadiescatering.com/wp-content/uploads/2021/03/Copy-of-Copy-of-Breakfast-Lunch-Menu_Rev-8.15v4-20.png",
                        address: "123 Main St., New York, NY 10001",
                        mapLink: "https://g.page/gigis-hollywood?share",
                        mondayOpen: "09:00",
                        mondayClose: "17:00",
                        tuesdayOpen: "09:00",
                        tuesdayClose: "17:00",
                        wednesdayOpen: "09:00",
                        wednesdayClose: "17:00",
                        thursdayOpen: "09:00",
                        thursdayClose: "17:00",
                        fridayOpen: "09:00",
                        fridayClose: "17:00",
                        saturdayOpen: null,
                        saturdayClose: null,
                        sundayOpen: null,
                        sundayClose: null,
                        number: "123-456-7890",
                        email: "info@gigis.la"
                }

        const newAccount = { username, password, data };
        console.log(newAccount)
        {allData.find(userObj => userObj.username === username)? alert('user already exists'):  createAndLogin()}

        
        // {!userExists && password ? createAndLogin() : alert("username or password is invalid")}
        
        function createAndLogin() {
            console.log('createAndLogin fired')

            fetch("http://localhost:3000/users" , {
                method: "POST" , 
                headers: {"Content-Type" : "application/json"}, 
                body: JSON.stringify(newAccount)
            })
              history.push("/create-page");
        }
       
      
          
    }
    function handleExistingAccount(){
        history.push("/login")
    }

    
        return (
        <div>
            <Header />
              <form onSubmit={handleSubmit} className="new-account">
                <h2> Time to create your account!</h2>
                    <label> 
                        <input placeholder="Username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                    <input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    <input type="submit" value="Create your new account!" />
            </form>
            <button onClick={handleExistingAccount}>Already have a account? Sign in. </button>
        </div>
 
 )
}

export default CreateAccount