import { useHistory } from "react-router-dom";
import Header from "./Header";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function CreatePage ({ user, restaurantData, setRestaurantData }) {
    let history = useHistory();
    
    function handleChange(e) {
        setRestaurantData(
            {...restaurantData,
            [e.target.name]: e.target.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/users/${user}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:restaurantData})
        })
        .then(r => r.json())
        history.push(`/restaurant/${user}`);

    }
    return (
        <>
        <Header />
        <div className="new-form">
            <div className="form-aside-container">
                <form onSubmit = {handleSubmit}>
                <h3>About</h3><hr></hr>
                    <h4>Restaurant Name</h4>
                    <input onChange = {handleChange} type="text" name="name" placeholder= "Acme Pizza co" value = {restaurantData.name} required/>
                    <h4>Restaurant Description</h4>
                    <input onChange = {handleChange} type="text" name="description" placeholder="Grungy bar with a lively atmosphere" value = {restaurantData.description} required/>
                    <h4>Background Image</h4>
                    <input onChange = {handleChange} type="text" name="backgroundImage" placeholder="Background Image URL" value = {restaurantData.backgroundImage} required/>
                    <h4>Logo</h4>
                    <input onChange = {handleChange} type="text" name="logoImage" placeholder="Logo Image URL" value = {restaurantData.logoImage} required/>
                <h3>Menu</h3><hr></hr>
                    <h4>Menu Image</h4>
                    <input onChange = {handleChange} type="text" name="menuImage" placeholder="Menu Image URL" value = {restaurantData.menuImage} required/>
                <h3>Hours & Location</h3><hr></hr>
                    <h4>Google Maps Link</h4>
                    <input onChange = {handleChange} type="text" name="mapLink" placeholder="Google Maps URL" value = {restaurantData.mapLink} required/>
                    <br></br>
                    <h4>Address</h4>
                    <input onChange = {handleChange} type="text" name="address" placeholder="Address" value = {restaurantData.address} required/>

                    <br></br>
                    <label>
                        <span>Monday</span>
                        <input
                        type="checkbox"
                        name = "monday-checkbox"
                        onChange={handleChange}
                        checked={false}
                        />
                        <input onChange = {handleChange} type="time" name="mondayOpen" value= {restaurantData.mondayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="mondayClose" value= {restaurantData.mondayClose}/>
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
                        <input onChange = {handleChange} type="time" name="tuesdayOpen" value= {restaurantData.tuesdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="tuesdayClose" value= {restaurantData.tuesdayClose}/>
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
                        <input onChange = {handleChange} type="time" name="wednesdayOpen" value= {restaurantData.wednesdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="wednesdayClose" value= {restaurantData.wednesdayClose}/>
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
                        <input onChange = {handleChange} type="time" name="thursdayOpen" value= {restaurantData.thursdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="thursdayClose" value= {restaurantData.thursdayClose}/>
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
                        <input onChange = {handleChange} type="time" name="fridayOpen" value= {restaurantData.fridayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="fridayClose" value= {restaurantData.fridayClose}/>
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
                        <input onChange = {handleChange} type="time" name="saturdayOpen" value= {restaurantData.saturdayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="saturdayClose" value= {restaurantData.saturdayClose}/>
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
                        <input onChange = {handleChange} type="time" name="sundayOpen" value= {restaurantData.sundayOpen} />
                        to
                        <input onChange = {handleChange} type="time" name="sundayClose" value= {restaurantData.sundayClose}/>
                    </label>
                    <br></br>
                    <h3>Contact</h3><hr></hr>
                    <h4>Phone Number</h4>
                    <input onChange = {handleChange} type="tel" name="number" placeholder='555-123-4567' value = {restaurantData.number} required/>
                    <h4>Email Address</h4>
                    <input onChange = {handleChange} type="email" name="email" placeholder='restaurant@gmail.com' value = {restaurantData.email} required/>
                    <br></br>
                    <br></br>
                    <button  type="submit">Save & Launch Page</button>
                </form>
            </div>
            <div className="preview-aside-container">
            <div>
            <RestaurantNav 
                restaurantData={restaurantData}
            />
            <RestaurantHeader 
                restaurantData={restaurantData}
            />
            <RestaurantMenu 
                restaurantData={restaurantData}
            />
            <RestaurantHours 
                restaurantData={restaurantData}
            />
            <RestaurantContact 
                restaurantData={restaurantData}
            />
            </div>
            </div>
         </div>
        </>
    )
}
export default CreatePage