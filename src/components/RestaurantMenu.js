function RestaurantMenu ({ restaurantData }) {
    const { menuImage } = restaurantData;
    
    return (
        <div id="menu" className="restaurant-section">
            <h2 className="restaurant-title-header">Menu</h2>
            <div className="menu-img-container">
                <img className="menu-img" src={menuImage} alt="Menu" />
            </div>
        </div>
    )
}

export default RestaurantMenu