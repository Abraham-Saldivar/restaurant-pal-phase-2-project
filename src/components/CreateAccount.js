import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import Header from "./Header";


function CreateAccount({ allData, setUserObj, userObj }) {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")

     let history = useHistory();
    


    const handleSubmit = (e) => { 
        e.preventDefault()
        const data = {
            name: "Your Restaurant Name Here",
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
        const validateUserObj = allData.find(validateUserObj => validateUserObj.username === username)
        {validateUserObj? alert('User already exists. Login!'):  createAndLogin()}


        
        function createAndLogin() {
            console.log('createAndLogin fired')

            fetch("http://localhost:3000/users" , {
                method: "POST" , 
                headers: {"Content-Type" : "application/json"}, 
                body: JSON.stringify(newAccount)
            })
            .then(r => r.json())
            .then(res => {
                setUserObj(res)
            })
            history.push("/create-page");
        }
    }

    function handleExistingAccount(){
        history.push("/login")
    }

    
    return (
        <div>
            <Header 
            userObj={userObj}
            setUserObj = {setUserObj}
            />
            <div className="login-container">
                <form onSubmit={handleSubmit} className="new-account">
                    <h2 className="login-header"> Time to create your account!</h2>
                        
                    <div className="login-form-container">
                        <label className="login-form-label"> Username</label>
                            <input placeholder="Username" value={username} type="text" className="login-form-input" onChange={(e) => setUsername(e.target.value)}/>
                        <label className="login-form-label"> Password</label>
                            <input placeholder="Password" value={password} type="password" className="login-form-input" onChange={(e) => setPassword(e.target.value)} required/>
                        <input type="submit" value="Create" className="styled-button" />
                        <button className="login-sign-button" onClick={handleExistingAccount}>Already have a account? Sign in. </button>
                    </div>    
                </form>
                
            </div>
                
        </div>
    
    )
}

export default CreateAccount