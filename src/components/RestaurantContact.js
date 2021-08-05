function RestaurantContact ({ restaurantData }) {
    const { number, email } = restaurantData;
    
    return (
        <div id="contact" className="restaurant-section">
            <h2 className="restaurant-title-header">Contact</h2>
            <a href={`tel:${number}`}>{number}</a>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    )
}

export default RestaurantContact