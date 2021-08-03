function RestaurantHeader ({ restaurantData }) {
  const { logoImage } = restaurantData;
    
  return (
    <nav className="restaurant-nav">
      <img src={logoImage} alt="restaurant logo" className="restaurant-logo" />
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