import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import CreatePage from "./CreatePage";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

function App() {

  const [user, setUser] = useState(1);
  //^^^set user to id of a sample user to start
  const [restaurantData, setRestaurantData] = useState([]);

  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login 
            setUser={setUser}
            setRestaurantData={setRestaurantData}
          />
        </Route>
        <Route path="/create-account">
          <CreateAccount 
          setUser={setUser}
          setRestaurantData={setRestaurantData}/>
        </Route>
        <Route path="/create-page">
          <CreatePage 
            user = {user}
            restaurantData={restaurantData}
            setRestaurantData={setRestaurantData}
          />
        </Route>
        <Route path="/restaurant/:id">
          <Restaurant 
            restaurantData={restaurantData}
            setRestaurantData={setRestaurantData}
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
