
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import CreatePage from "./CreatePage";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import { users } from "../db.json";

function App() {
  const [user, setUser] = useState(3);
  const [restaurantData, setRestaurantData] = useState([]);
      
  useEffect(() => {
      fetch(`http://localhost:3000/users/${user}`)
      .then(res=>res.json())
      .then(e=>setRestaurantData(e.data))
  },[])
  console.log(restaurantData);

  // const userRestName = 

  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/create-page">
          <CreatePage user = {user}/>
        </Route>
        <Route path={`/restaurant/${user}`}>
          <Restaurant 
            restaurantData={restaurantData}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
