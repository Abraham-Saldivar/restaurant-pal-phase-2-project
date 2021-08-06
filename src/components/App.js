import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import CreatePage from "./CreatePage";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

function App() {
  const [allData, setAllData]  = useState([])
  const [userObj, setUserObj] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(data => setAllData(data))
    // setUserObj(allData[0])
    },[])

    // const objFromUsername = allData.find(userObject => userObject.username === username)
    // console.log(objFromUsername)
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login 
            allData = {allData}
            userObj = {userObj}
            setUserObj = {setUserObj}
          />
        </Route>
        <Route path="/create-account">
          <CreateAccount 
          allData = {allData}
          setUserObj = {setUserObj}
          />
        </Route>
        <Route path="/create-page">
          <CreatePage 
            userObj = {userObj}
            setUserObj = {setUserObj}
          />
        </Route>
        <Route path="/restaurant/:username">
          <Restaurant 
            userObj = {userObj}
            allData = {allData}
            setUserObj = {setUserObj}
          /> 
        </Route>
        <Route exact path="/">
          <Home userObj = {userObj} setUserObj = {setUserObj}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
