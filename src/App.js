import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './Components/Home/Home/Home';
import Location from './Components/Location/Location/Location';
import NoMatch from './Components/NoMatch/NoMatch';
import FlatDetails from './Components/FlatDetails/FlatDetails/FlatDetails';
import Review from './Components/Review/Review';
import Information from './Components/Information/Information';
import Confirm from './Components/Confirm/Confirm';
import { createContext, useState } from 'react';
import Success from './Components/success/Success';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LogIn from './Components/LogIn/LogIn';
 
 export const UserContext = createContext();
 export const InfoContext = createContext()

function App() {
  const [flatDetails , setflatDetails] = useState({});
  const [UserInfo, setUserInfo] = useState({})
  console.log(UserInfo)
 
  return (
    <UserContext.Provider value={[flatDetails, setflatDetails]}>
      <InfoContext.Provider  value={[UserInfo,setUserInfo]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route  path="/flatdetails/:faltkey">
         <FlatDetails></FlatDetails>
        </Route>
        <Route  path="/review">
          <Review></Review>
        </Route>
        <Route  path="/information">
           <Information></Information>
        </Route>
        <PrivateRoute  path="/map">
        <Location></Location>
        </PrivateRoute>
        <Route path="/login">
           <LogIn></LogIn>
        </Route>
        <Route  path="/confirm">
           <Confirm></Confirm>
        </Route>
        <Route  path="/success">
        <Success></Success>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>

    </Router>
    </InfoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
