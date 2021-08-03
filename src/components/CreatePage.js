import { useState } from "react";

function CreatePage () {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        logo: "",
        menu: "",
        location: "",
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
        const submission = {
            username: "postUser",
            password: "hjkl",
            projects: [formData]
        }

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submission)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <>
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
                    <input onChange = {handleChange} type="text" name="image" placeholder="Background Image URL" value = {formData.image}/>
                    <h4>Logo</h4>
                    <input onChange = {handleChange} type="text" name="logo" placeholder="Logo Image URL" value = {formData.logo}/>
                <h3>Menu</h3><hr></hr>
                    <h4>Menu</h4>
                    <input onChange = {handleChange} type="text" name="menu" placeholder="Menu Image URL" value = {formData.menu}/>
                <h3>Hours & Location</h3><hr></hr>
                    <h4>Google Maps Link</h4>
                    <input onChange = {handleChange} type="text" name="location" placeholder="Google Maps URL" value = {formData.location}/>
                    <br></br>
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