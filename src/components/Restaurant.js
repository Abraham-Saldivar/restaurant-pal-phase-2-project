import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantNav from "./RestaurantNav";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantHours from "./RestaurantHours";
import RestaurantContact from "./RestaurantContact";

function Restaurant ({ userObj }) {
    let history = useHistory();
    const { username } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [publicUserObj, setPublicUserObj] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
        .then(res=>res.json())
        .then(data => {
            setPublicUserObj(data.find(userObject => userObject.username === username))
        })
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
             
                    {userObj? <button onClick = {editButton} className = "restaurant-edit">Edit your restaurant page</button> : null}

                    <RestaurantNav />
                    <RestaurantHeader 
                        restaurantData={publicUserObj.data}
                    />
                    <RestaurantMenu 
                        restaurantData={publicUserObj.data}
                    />
                    <RestaurantHours 
                        restaurantData={publicUserObj.data}
                    />
                    <RestaurantContact 
                        restaurantData={publicUserObj.data}
                    />
                </div>
                }
    </>
    )
}

export default Restaurant