
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import CreatePage from "./CreatePage";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import { users } from "../db.json";

function App() {
//const [user, setUser] = useState("")
// const restaurant = user?.restaurant


  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login users={users}/>
        </Route>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/create-page">
          <CreatePage />
        </Route>
        <Route path="/restaurant">
          <Restaurant />
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
