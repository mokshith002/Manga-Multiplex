import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Booking from "./Components/Shows/Booking";
import SeatingLayout from "./Components/Shows/Seating/SeatingLayout";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Viewemp from "./Components/Manager/Employees/Viewemp";
import Profile from "./Components/Staff/Profile";
import Movie from "./Components/Shows/Movie/Movie"
import MovieCard from "./Components/Shows/Card/MovieCardHolder";
import Update from "./Components/Staff/Update";
import EmpProfile from "./Components/Manager/Employees/EmpProfile"
import AddShow from "./Components/Manager/Shows/AddShow"

function App() {
    
    return ( 
        <div className = "App" >
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path = "/"> <Home /> </Route> 
                    <Route path="/login"> <Login /> </Route> 
                    <Route path="/register"> <Register /> </Route> 
                    <Route path="/booking"> <Booking /> </Route>
                    <Route path="/all-staff"> <Viewemp /> </Route>
                    <Route path="/edit/my-profile"> <Update /></Route>
                    <Route path="/my-profile"> <Profile /></Route>
                    <Route path="/profile/:id"> <EmpProfile /></Route>
                    <Route path="/movies"> <MovieCard /></Route>
                    <Route path="/movie/:movieId"> <Movie /></Route>
                    <Route path="/add-show"> <AddShow /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;