function RestaurantHeader ({ restaurantData }) {
    const { logoImage, backgroundImage, name, description } = restaurantData;
    
    return (
        <div className="restaurant-header-container">
            <div className="restaurant-header-img" id="about" style={{backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="restaurant-header-intro">
                <img className="restaurant-header-logo" src={logoImage} />
                <h2 className="restaurant-name">Welcome to {name}</h2>
                <p className="restaurant-description">{description}</p>
            </div>
        </div>
    )
}

export default RestaurantHeader