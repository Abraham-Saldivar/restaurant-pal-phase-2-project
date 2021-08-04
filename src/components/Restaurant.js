import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ restaurantData, setRestaurantData }) {
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        // fetch(`http://localhost:3000/users/1`)
        .then(res=>res.json())
        .then(e=>setRestaurantData(e.data))
    },[id])

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