import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ restaurantData }) {
    return (
        <div>
            <RestaurantNav 
                restaurantData={restaurantData}
            />
            <RestaurantHeader 
                restaurantData={restaurantData}
            />
            <RestaurantMenu 
                restaurantData={restaurantData}
            />
            <RestaurantHours 
                restaurantData={restaurantData}
            />
            <RestaurantContact 
                restaurantData={restaurantData}
            />
        </div>
    )
}

export default Restaurant