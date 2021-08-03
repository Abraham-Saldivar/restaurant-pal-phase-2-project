import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ users }) {
    return (
        <div>
            <RestaurantNav />
            <RestaurantHeader />
            <RestaurantMenu />
            <RestaurantHours />
            <RestaurantContact />
        </div>
    )
}

export default Restaurant