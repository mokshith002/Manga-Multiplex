import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Booking from "./Components/Shows/Booking";
import SeatingLayout from "./Components/Shows/Seating/SeatingLayout";
import Ticket from "./Components/Shows/Ticket"; 
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Viewemp from "./Components/Manager/Viewemp";
import Profile from "./Components/Staff/Profile";
import Movie from "./Components/Shows/Movie/Movie"
import MovieCard from "./Components/Shows/Card/MovieCard";

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
                    <Route path="/profile"> <Profile /></Route>
                    <Route path="/movies"> <MovieCard /></Route>
                    <Route path="/movie/:movieId"> <Movie /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;