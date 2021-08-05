import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ restaurantData, setRestaurantData, user }) {
    let history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(res=>res.json())
        .then(e=>setRestaurantData(e.data))
    },[])

console.log('id: ' + id)
console.log('user: ' + user)

function editButton() {
    console.log('edit button');
    history.push("/create-page");
}

    return (
        <div>
            {user !== 1 && user.toString() === id.toString()? <button onClick = {editButton} className = "styled-button">Edit Details</button> : null}
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