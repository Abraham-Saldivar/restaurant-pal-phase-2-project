import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ restaurantData, setRestaurantData, user }) {
    let history = useHistory();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(res=>res.json())
        .then(e=>setRestaurantData(e.data))
        setTimeout(() => setIsLoading(false), 700)
    },[])


function editButton() {
    console.log('edit button');
    history.push("/create-page");
}

    return (
       <> 
            {isLoading? 
                    <img className = "loading-gif" src = "/data/loading-logo.gif"/>
                : 
                    <div>
                    {user !== 1 && user.toString() === id.toString()? <button onClick = {editButton} className = "restaurant-edit">Edit your restaurant page</button> : null}
                    <RestaurantNav />
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
                }
    </>
    )
}

export default Restaurant