function RestaurantHours ({ restaurantData }) {
    const { 
        mapLink, 
        address, 
        mondayOpen, 
        mondayClose,
        tuesdayOpen,
        tuesdayClose,
        wednesdayOpen,
        wednesdayClose,
        thursdayOpen,
        thursdayClose,
        fridayOpen,
        fridayClose,
        saturdayOpen,
        saturdayClose,
        sundayOpen,
        sundayClose,
    } = restaurantData;
    
    return (
        <div id="hours-location" className="restaurant-section">
            <h2 className="restaurant-title-header">Hours & Location</h2>
            <div className="restaurant-location">
                <iframe src={mapLink} width="600" height="450" allowFullScreen="" loading="lazy" />
            </div>
            <div className="restaurant-info">
                <div className="address-info">
                    <p className="info-header">Address</p>
                    <a href="https://g.page/gigis-hollywood?share">{address}</a>
                </div>
                <div className="hours-info">
                    <p className="info-header">Hours</p>
                    <ul>
                        <li><span className="hours-day">Monday</span>{mondayOpen} - {mondayClose}</li>
                        <li><span className="hours-day">Tuesday</span>{tuesdayOpen} - {tuesdayClose}</li>
                        <li><span className="hours-day">Wednesday</span>{wednesdayOpen} - {wednesdayClose}</li>
                        <li><span className="hours-day">Thursday</span>{thursdayOpen} - {thursdayClose}</li>
                        <li><span className="hours-day">Friday</span>{fridayOpen} - {fridayClose}</li>
                        <li><span className="hours-day">Saturday</span>{saturdayOpen} - {saturdayClose}</li>
                        <li><span className="hours-day">Sunday</span>{sundayOpen} - {sundayClose}</li>
                    </ul>
                </div>
                

            </div>
        </div>
    )
}

export default RestaurantHours