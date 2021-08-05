import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Header from "./Header";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function CreatePage ({ user, restaurantData, setRestaurantData }) {
    const [previewWidth, setPreviewWidth] = useState("100%");
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

    function handleCheck(e) {
        const dayOpen = `${e.target.name}Open`;
        const dayClose = `${e.target.name}Close`;
        console.log(restaurantData.dayOpen)
        console.log(e.target.checked)

        {e.target.checked? 
        setRestaurantData(
            {...restaurantData,
                [dayOpen]: '09:00',            
                [dayClose]: '17:00'            
            }
        )
         :
         setRestaurantData(
            {...restaurantData,
            [dayOpen]: "",
            [dayClose]: "",
            }
        )
        }
        
    }

    return (
        <>
        <Header />
        <div className="new-form">
            <div className="form-mobile-notice">
                <div className="form-mobile-container">
                    <p>This page is best experienced on a desktop. Please switch to a desktop screen. Otherwise, you can preview your page here.</p>
                    <Link to={`/restaurant/${user}`}>See Restaurant Site</Link>
                </div>
            </div>
            <div className="form-aside-container">
                <form onSubmit = {handleSubmit}>
                    <div className="form-section">
                        <h3 className="hero-text">About</h3>
                        <label>Restaurant Name</label>
                        <input onChange = {handleChange} type="text" name="name" placeholder= "Acme Pizza co" value = {restaurantData.name} required/>
                        <label>Restaurant Description</label>
                        <input onChange = {handleChange} type="text" name="description" placeholder="Grungy bar with a lively atmosphere" value = {restaurantData.description} required/>
                        <label>Background Image</label>
                        <input onChange = {handleChange} type="text" name="backgroundImage" placeholder="Background Image URL" value = {restaurantData.backgroundImage} required/>
                        <label>Logo</label>
                        <input onChange = {handleChange} type="text" name="logoImage" placeholder="Logo Image URL" value = {restaurantData.logoImage} required/>
                    </div>
                    <div className="form-section">
                    <h3 className="hero-text">Menu</h3>
                        <label>Menu Image</label>
                        <input onChange = {handleChange} type="text" name="menuImage" placeholder="Menu Image URL" value = {restaurantData.menuImage} required/>
                    </div>
                    <div className="form-section">
                        <h3 className="hero-text">Hours & Location</h3>
                        <label>Google Maps Link</label>
                        <input onChange = {handleChange} type="text" name="mapLink" placeholder="Google Maps URL" value = {restaurantData.mapLink} required/>
                        <label>Address</label>
                        <input onChange = {handleChange} type="text" name="address" placeholder="Address" value = {restaurantData.address} required/>

                        <label>
                            <span>Monday</span>
                            <input
                            type="checkbox"
                            name = "monday"
                            onChange={handleCheck}
                            checked={!!restaurantData.mondayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="mondayOpen" value= {restaurantData.mondayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="mondayClose" value= {restaurantData.mondayClose}/>
                        </label>
                        <label>
                            <span>Tuesday</span>
                            <input
                            type="checkbox"
                            name = "tuesday"
                            onChange={handleCheck}
                            checked={!!restaurantData.tuesdayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="tuesdayOpen" value= {restaurantData.tuesdayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="tuesdayClose" value= {restaurantData.tuesdayClose}/>
                        </label>
                        <label>
                            <span>Wednesday</span>
                            <input
                            type="checkbox"
                            name = "wednesday"
                            onChange={handleCheck}
                            checked={!!restaurantData.wednesdayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="wednesdayOpen" value= {restaurantData.wednesdayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="wednesdayClose" value= {restaurantData.wednesdayClose}/>
                        </label>
                        <label>
                            <span>Thursday</span>
                            <input
                            type="checkbox"
                            name = "thursday"
                            onChange={handleCheck}
                            checked={!!restaurantData.thursdayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="thursdayOpen" value= {restaurantData.thursdayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="thursdayClose" value= {restaurantData.thursdayClose}/>
                        </label>
                        <label>
                            <span>Friday</span>
                            <input
                            type="checkbox"
                            name = "friday"
                            onChange={handleCheck}
                            checked={!!restaurantData.fridayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="fridayOpen" value= {restaurantData.fridayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="fridayClose" value= {restaurantData.fridayClose}/>
                        </label>
                        <label>
                            <span>Saturday</span>
                            <input
                            type="checkbox"
                            name = "saturday"
                            onChange={handleCheck}
                            checked={!!restaurantData.saturdayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="saturdayOpen" value= {restaurantData.saturdayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="saturdayClose" value= {restaurantData.saturdayClose}/>
                        </label>
                        <label>
                            <span>Sunday</span>
                            <input
                            type="checkbox"
                            name = "sunday"
                            onChange={handleCheck}
                            checked={!!restaurantData.sundayOpen}
                            />
                            <input onChange = {handleChange} type="time" name="sundayOpen" value= {restaurantData.sundayOpen} />
                            to
                            <input onChange = {handleChange} type="time" name="sundayClose" value= {restaurantData.sundayClose}/>
                        </label>
                    </div>
                    <div className="form-section">
                        <h3 className="hero-text">Contact</h3>
                        <label>Phone Number</label>
                        <input onChange = {handleChange} type="tel" name="number" placeholder='555-123-4567' value = {restaurantData.number} required/>
                        <label>Email Address</label>
                        <input onChange = {handleChange} type="email" name="email" placeholder='restaurant@gmail.com' value = {restaurantData.email} required/>
                    </div>
                    <button className="styled-button" type="submit">Save & Launch Page</button>
                </form>
            </div>
            <div className="preview-aside-container">
                <div className="preview-section-info">
                    <p className="preview-section-callout">This is a preview</p>
                    <div className="preview-device-section">
                        <button className={ previewWidth === "100%" ? "preview-device active desktop-preview" : "preview-device desktop-preview"} onClick={()=>setPreviewWidth("100%")}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" class="svg-inline--fa fa-desktop fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg></button>
                        <button className={ previewWidth === "320px" ? "preview-device active mobile-preview" : "preview-device mobile-preview"} onClick={()=>setPreviewWidth("320px")}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></button>
                    </div>
                </div>
                <div className="preview-browser-container" style={{ width: previewWidth }}>
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

export default CreatePage;