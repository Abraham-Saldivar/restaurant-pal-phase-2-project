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
            <h2 className="restaurant-name">Hours & Location</h2>
            <div className="restaurant-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3028487143956!2d-118.34487008474787!3d34.087381380596334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf98a6799487%3A0x82075a7e7a198e0f!2sGigi&#39;s!5e0!3m2!1sen!2sus!4v1627959238711!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" />
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