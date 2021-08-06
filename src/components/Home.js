import { Link } from "react-router-dom";
import Header from "./Header";

function Home ( {userObj, setUserObj}) {
    return (
        <div className="hp-wrapper">
            <Header userObj = {userObj} setUserObj = {setUserObj}/>
            <div className="hp-banner"></div>
            <div className="hp-banner-text">
                <h2 className="hp-banner-intro">Create a simple restaurant site in minutes.</h2>
                <Link className="hp-banner-cta" exact to="/create-account">Create an Account</Link>
            </div>
            <div className="mission-banner">
                <h4 className="small-header">Our Mission</h4>
                <p className="hero-text">We’re here to help you create a quick, simple & effective website for your restaurant. We know restauranteurs aren’t really techies, so we wanted to create a simple landing page for you to promote your business.</p>
                <Link className="styled-button" exact to="/create-account">Create an Account</Link>
            </div>
            <div className="sample-banner">
                <h4 className="small-header">View Some Samples</h4>
                {/* Might want to do a map here on the sample websites */}
                <div className="sample-container">
                    <div className="sample-container">
                        <Link to="/restaurant/kazunori">
                            <img src="https://p69.f3.n0.cdn.getcloudapp.com/items/yAuyPl7v/77673293-c38d-4b03-8613-7be6429cd60d.jpg?source=viewer&v=23a5767e6ecbd4311cb6d93f7ef560a1" alt="Sliding"/>
                            <p className="hero-text">Rakkan</p>
                            <p className="location-text">Los Angeles, CA</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home