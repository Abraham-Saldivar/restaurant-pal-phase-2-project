import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Header from "./Header";

function CreatePage ({ userObj, setUserObj }) {
    const [previewWidth, setPreviewWidth] = useState("100%");
    const [isLoading, setIsLoading] = useState(true);
    const [iframeRefresh, setIframeRefresh] = useState(0);

    let history = useHistory();

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 700)
    },[])


    function handleChange(e) {
        setUserObj(
            {...userObj,
                data: {
                    ...userObj.data,
                    [e.target.name]: e.target.value
                }
            }
        )
    }


    function handleIframeClick(e) {
        fetch(`http://localhost:3000/users/${userObj.id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:userObj.data})
        })
        .then(r => r.json());

        document.getElementById('iframeid').src += '';

        setIframeRefresh(0);
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/users/${userObj.id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data:userObj.data})
        })
        .then(r => r.json())
        history.push(`/restaurant/${userObj.username}`);

    }

    function handleCheck(e) {
        const dayOpen = `${e.target.name}Open`;
        const dayClose = `${e.target.name}Close`;

        {e.target.checked? 
            setUserObj(
                {...userObj,
                data: {
                    ...userObj.data,
                    [dayOpen]: "09:00",
                    [dayClose]: "17:00",
                 }
                }
            )
         :
         setUserObj(
            {...userObj,
            data: {
                ...userObj.data,
                [dayOpen]: "",
                [dayClose]: "",
             }
            }
        )
        }
    }

    return (
        <>
            {isLoading? 
            <img className = "loading-gif" src = "/data/loading-logo.gif"/>
            :
                    <>
                        <Header setUserObj={setUserObj} userObj ={userObj}/>
        <div className="new-form">
            <div className="form-mobile-notice">
                <div className="form-mobile-container">
                    <p>This page is best experienced on a desktop. Please switch to a desktop screen. Otherwise, you can preview your page here.</p>
                    <Link to={`/restaurant/${userObj.id}`}>See Restaurant Site</Link>
                </div>
            </div>
            <div className="form-aside-container">
                <form onSubmit = {handleSubmit}>
                    <div className="form-section">
                        <h3 className="hero-text">About</h3>
                        <label>Restaurant Name</label>
                        <input onChange = {handleChange} type="text" name="name" placeholder= "Acme Pizza co" value = {userObj.data.name} required/>
                        <label>Restaurant Description</label>
                        <input onChange = {handleChange} type="text" name="description" placeholder="Grungy bar with a lively atmosphere" value = {userObj.data.description} required/>
                        <label>Background Image</label>
                        <input onChange = {handleChange} type="text" name="backgroundImage" placeholder="Background Image URL" value = {userObj.data.backgroundImage} required/>
                        <label>Logo</label>
                        <input onChange = {handleChange} type="text" name="logoImage" placeholder="Logo Image URL" value = {userObj.data.logoImage} required/>
                    </div>
                    <div className="form-section">
                    <h3 className="hero-text">Menu</h3>
                        <label>Menu Image</label>
                        <input onChange = {handleChange} type="text" name="menuImage" placeholder="Menu Image URL" value = {userObj.data.menuImage} required/>
                    </div>
                    <div className="form-section">
                        <h3 className="hero-text">Hours & Location</h3>
                        <label>Google Maps Link</label>
                        <input onChange = {handleChange} type="text" name="mapLink" placeholder="Google Maps URL" value = {userObj.data.mapLink} required/>
                        <label>Address</label>
                        <input onChange = {handleChange} type="text" name="address" placeholder="Address" value = {userObj.data.address} required/>
                        <div className="hours-container">
                            <label>Hours</label>

                            <label className="hour-item">
                                <input type="checkbox" name = "monday" onChange={handleCheck} checked={!!userObj.data.mondayOpen}/>
                                <span>Monday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="mondayOpen" value= {userObj.data.mondayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="mondayClose" value= {userObj.data.mondayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "tuesday" onChange={handleCheck} checked={!!userObj.data.tuesdayOpen}/>
                                <span>Tuesday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="tuesdayOpen" value= {userObj.data.tuesdayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="tuesdayClose" value= {userObj.data.tuesdayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "wednesday" onChange={handleCheck} checked={!!userObj.data.wednesdayOpen}/>
                                <span>Wednesday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="wednesdayOpen" value= {userObj.data.wednesdayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="wednesdayClose" value= {userObj.data.wednesdayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "thursday" onChange={handleCheck} checked={!!userObj.data.thursdayOpen}/>
                                <span>Thursday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="thursdayOpen" value= {userObj.data.thursdayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="thursdayClose" value= {userObj.data.thursdayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "friday" onChange={handleCheck} checked={!!userObj.data.fridayOpen}/>
                                <span>Friday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="fridayOpen" value= {userObj.data.fridayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="fridayClose" value= {userObj.data.fridayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "saturday" onChange={handleCheck} checked={!!userObj.data.saturdayOpen}/>
                                <span>Saturday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="saturdayOpen" value= {userObj.data.saturdayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="saturdayClose" value= {userObj.data.saturdayClose}/>
                                </div>  
                            </label>
                            <label className="hour-item">
                                <input type="checkbox" name = "sunday" onChange={handleCheck} checked={!!userObj.data.sundayOpen}/>
                                <span>Sunday</span>
                                <div className="hours-input-container">
                                    <input onChange = {handleChange} className="hour-input" type="time" name="sundayOpen" value= {userObj.data.sundayOpen} />
                                    <span>to</span>
                                    <input onChange = {handleChange} className="hour-input" type="time" name="sundayClose" value= {userObj.data.sundayClose}/>
                                </div>  
                            </label>
                        </div>
                    </div>
                    <div className="form-section">
                        <h3 className="hero-text">Contact</h3>
                        <label>Phone Number</label>
                        <input onChange = {handleChange} type="tel" name="number" placeholder='555-123-4567' value = {userObj.data.number} required/>
                        <label>Email Address</label>
                        <input onChange = {handleChange} type="email" name="email" placeholder='restaurant@gmail.com' value = {userObj.data.email} required/>
                    </div>
                    <button className="styled-button" type="submit">Launch Page</button>
                </form>
            </div>
            <div className="preview-aside-container">
                <div className="preview-section-info">
                    <button className="update-preview-button" onClick={handleIframeClick}>Update Preview</button>

                    <div className="preview-device-section">
                        <button className={ previewWidth === "100%" ? "preview-device active desktop-preview" : "preview-device desktop-preview"} onClick={()=>setPreviewWidth("100%")}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" class="svg-inline--fa fa-desktop fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg></button>
                        <button className={ previewWidth === "320px" ? "preview-device active mobile-preview" : "preview-device mobile-preview"} onClick={()=>setPreviewWidth("320px")}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></button>
                    </div>
                </div>

                <div className="iframe-container">
                    <iframe src={`http://localhost:3001/restaurant/${userObj.username}`} id="iframeid" key={iframeRefresh} style={{ width: previewWidth }} />
                </div>
            </div>
         </div>
        </>
            }
       </> 
    )
}

export default CreatePage;