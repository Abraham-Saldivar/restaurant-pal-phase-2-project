import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="hp-wrapper">
            <div className="hp-banner"></div>
            <div className="hp-banner-text">
                <h2 className="hp-banner-intro">Create a simple restaurant site in minutes.</h2>
                <Link className="hp-banner-cta" exact to="/create-page">Get Started!</Link>
            </div>
            <div className="mission-banner">
                <h4 className="small-header">Our Mission</h4>
                <p className="hero-text">We’re here to help you create a quick, simple & effective website for your restaurant. We know restauranteurs aren’t really techies, so we wanted to create a simple landing page for you to promote your business.</p>
                <Link className="styled-button" exact to="/create-page">Get Started</Link>
            </div>
            <div className="sample-banner">
                <h4 className="small-header">View Some Samples</h4>
                {/* Might want to do a map here on the sample websites */}
                <div className="sample-container">
                    <div className="sample-container">
                        <Link to="/restaurant/:id">
                            <img src="https://i.ibb.co/cXbtQgL/Image-2021-08-02-at-2-26-29-PM.jpg" />
                            <p className="hero-text">Momofuku</p>
                            <p className="location-text">New York, NY</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home