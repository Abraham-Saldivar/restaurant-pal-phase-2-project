import { useState } from "react";
import Header from "./Header";
function CreatePage ({user}) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        backgroundImage: "",
        logoImage: "",
        menuImage: "",
        address: "",
        mapLink: "",
        mondayOpen: '09:00',
        mondayClose: '17:00',
        tuesdayOpen: '09:00',
        tuesdayClose: '17:00',
        wednesdayOpen: '09:00',
        wednesdayClose: '17:00',
        thursdayOpen: '09:00',
        thursdayClose: '17:00',
        fridayOpen: '09:00',
        fridayClose: '17:00',
        saturdayOpen: '10:00',
        saturdayClose: '14:00',
        sundayOpen: '10:00',
        sundayClose: '14:00',
        number: "",
        email: ""
    })
    function handleChange(e) {
        console.log(e.target.name + ' changed!')
        setFormData(
            {...formData,
            [e.target.name]: e.target.value
            }
        )
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        console.log(user)
        fetch(`http://localhost:3000/users/${user}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:formData})
        })
        .then(r => r.json())
        .then(console.log)
        // const submission = {
        //     username: "postUser",
        //     password: "hjkl",
        //     projects: [formData]
        
       //FETCH PATCH goes here
    }
    return (
        <>
        <Header />
        <br></br>
        <b>This is the CreatePage</b>
        <div className="new-plant-form">
            <form onSubmit = {handleSubmit}>
                <h3>About</h3><hr></hr>
                    <h4>Restaurant Name</h4>
                    <input onChange = {handleChange} type="text" name="name" placeholder= "Acme Pizza co" value = {formData.name}/>
                    <h4>Restaurant Description</h4>
                    <input onChange = {handleChange} type="text" name="description" placeholder="Grungy bar with a lively atmosphere" value = {formData.description}/>
                    <h4>Background Image</h4>
                    <input onChange = {handleChange} type="text" name="backgroundImage" placeholder="Background Image URL" value = {formData.backgroundImage}/>
                    <h4>Logo</h4>
                    <input onChange = {handleChange} type="text" name="logoImage" placeholder="Logo Image URL" value = {formData.logoImage}/>
                <h3>Menu</h3><hr></hr>
                    <h4>Menu Image</h4>
                    <input onChange = {handleChange} type="text" name="menuImage" placeholder="Menu Image URL" value = {formData.menuImage}/>
                <h3>Hours & Location</h3><hr></hr>
                    <h4>Google Maps Link</h4>
                    <input onChange = {handleChange} type="text" name="mapLink" placeholder="Google Maps URL" value = {formData.mapLink}/>
                    <br></br>
                    <h4>Address</h4>
                    <input onChange = {handleChange} type="text" name="address" placeholder="Address" value = {formData.address}/>

                    <br></br>
                    <label>
                        <span>Monday</span>
                        <input
                        type="checkbox"
                        name = "monday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="mondayOpen" value= {formData.mondayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="mondayClose" value= {formData.mondayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Tuesday</span>
                        <input
                        type="checkbox"
                        name = "tuesda-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="tuesdayOpen" value= {formData.tuesdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="tuesdayClose" value= {formData.tuesdayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Wednesday</span>
                        <input
                        type="checkbox"
                        name = "wednesday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="wednesdayOpen" value= {formData.wednesdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="wednesdayClose" value= {formData.wednesdayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Thursday</span>
                        <input
                        type="checkbox"
                        name = "thursday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="thursdayOpen" value= {formData.thursdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="thursdayClose" value= {formData.thursdayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Friday</span>
                        <input
                        type="checkbox"
                        name = "friday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="fridayOpen" value= {formData.fridayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="fridayClose" value= {formData.fridayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Saturday</span>
                        <input
                        type="checkbox"
                        name = "saturday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="saturdayOpen" value= {formData.saturdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="saturdayClose" value= {formData.saturdayClose}/>
                    </label>
                    <br></br>
                    <label>
                        <span>Sunday</span>
                        <input
                        type="checkbox"
                        name = "sunday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="sundayOpen" value= {formData.sundayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="sundayClose" value= {formData.sundayClose}/>
                    </label>
                    <br></br>
                    <h3>Contact</h3><hr></hr>
                    <h4>Phone Number</h4>
                    <input onChange = {handleChange} type="tel" name="number" placeholder='555-123-4567' value = {formData.number}/>
                    <h4>Email Address</h4>
                    <input onChange = {handleChange} type="email" name="email" placeholder='restaurant@gmail.com' value = {formData.email}/>
                    <br></br>
                    <br></br>
                    <button  type="submit">Save</button>
                </form>
         </div>
        </>
    )
}
export default CreatePage