function RestaurantHeader ({ restaurantData }) {
    const { backgroundImage, name, description } = restaurantData;
    
    return (
        <div className="restaurant-header-img" id="about" style={{backgroundImage: `url(${backgroundImage})` }}>
            <h2 className="restaurant-name">{name}</h2>
            <p className="restaurant-description">{description}</p>
        </div>
    )
}

export default RestaurantHeader