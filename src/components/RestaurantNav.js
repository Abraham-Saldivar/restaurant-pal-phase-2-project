function RestaurantHeader () {
    return (
        <nav className="restaurant-nav">
            <img src="https://i.stack.imgur.com/kJSXT.png" alt="restaurant logo" className="restaurant-logo" />
            <div className="restaurant-links">
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#hours-location">Hours & Location</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default RestaurantHeader