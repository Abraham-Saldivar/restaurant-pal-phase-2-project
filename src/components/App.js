
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import CreatePage from "./CreatePage";
import Restaurant from "./Restaurant";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
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
    </div>
  )
}

export default App;
