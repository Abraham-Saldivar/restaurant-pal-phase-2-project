import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import Header from "./Header";


function CreateAccount({ allData, setUserObj, userObj }) {
     const [account, setAccount] = useState(
         {
             username: "",
             password: ""
         }
     )

     let history = useHistory();
    


    const handleSubmit = (e) => { 
        e.preventDefault()
        
        const data = {
            name: "Your Restaurant Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur enim eget erat consectetur accumsan. Sed faucibus lectus orci, eget varius nunc dictum non.",
            backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            logoImage: "https://logodix.com/logo/1934470.png",
            menuImage: "https://i.pinimg.com/564x/89/bb/95/89bb9579c7618fd29b1613c25fc591d6.jpg",
            address: "18492 5th Ave., New York, NY 10001",
            mapLink: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJh5R5ppi_woARD44Zen5aB4I&key=AIzaSyCKMghPPFlzCbg7BSywBc5JHqQv8oJ3sTc",
            mondayOpen: null,
            mondayClose: null,
            tuesdayOpen: "17:00",
            tuesdayClose: "22:00",
            wednesdayOpen: "17:00",
            wednesdayClose: "22:00",
            thursdayOpen: "17:00",
            thursdayClose: "22:00",
            fridayOpen: "17:00",
            fridayClose: "24:00",
            saturdayOpen: "16:30",
            saturdayClose: "24:00",
            sundayOpen: null,
            sundayClose: null,
            number: "273-563-1924",
            email: "info@yourrestaurant.com"
        }

        const username = account.username
        const password = account.password
        const newAccount = { username, password, data };
        const validatedUserObj = allData.find(obj => obj.username === account.username)
        {validatedUserObj? alert('User already exists. Login!'):  createAndLogin()}
        const validatedPasswordObj = allData.find(obj => obj.password > 4)
        {validatedPasswordObj ? alert("password must be greater than 3 characters long") : createAndLogin()}

        
        function createAndLogin() {
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


    function handleChange(e) {
            setAccount(
                {
                ...account,
                [e.target.name]: e.target.value.replace(' ', '')
                }
            )
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
                            <input placeholder="Username" value={account.username} type="text" name = "username" className="login-form-input" onChange={handleChange}/>
                        <label className="login-form-label"> Password</label>
                            <input placeholder="Password" value={account.password} type="password" name = "password" className="login-form-input" onChange={handleChange} required/>
                        <input type="submit" value="Create" className="styled-button" />
                        <button className="login-sign-button" onClick={handleExistingAccount}>Already have a account? Sign in. </button>
                    </div>    
                </form>
                
            </div>
                
        </div>
    
    )
}

export default CreateAccount