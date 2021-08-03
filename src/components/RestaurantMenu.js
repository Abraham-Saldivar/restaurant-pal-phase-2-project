function RestaurantMenu ({ restaurantData }) {
    const { menuImage } = restaurantData;
    
    return (
        <div id="menu" className="restaurant-section">
            <h2 className="restaurant-name">Menu</h2>
            <div className="menu-img-container">
                <img className="menu-img" src={menuImage} />
            </div>
        </div>
    )
}

export default RestaurantMenu