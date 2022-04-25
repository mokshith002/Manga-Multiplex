import React, {useState, useEffect} from "react";
import {useLocation, useRouteMatch, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import SeatingLayout from "./Seating/SeatingLayout";
import Ticket from "./Ticket";

export default function Booking() {
    
    const {path, url} = useRouteMatch();

    const URL = `http://localhost:${5000}`;

    const {search} = useLocation();
    // let [searchParams, setSearchParams] = useSearchParams();
    const searchParams = new URLSearchParams(search);

    const showId = searchParams.get("showId");

    const [hallId, setHallId] = useState();
    const [theaterId, setTheaterId] = useState();
    const [loading, setLoading] = useState(true);

    const getTheaterHall = async () => {
        const res = await axios.get(`${URL}/show/${showId}/theater-hall`);
        setHallId(res.data.hallno);
        setTheaterId(res.data.theaterid);
        setLoading(false);
    }

    useEffect (() => {
        getTheaterHall();
    })

    const bookSeats = async (selected) => {
        console.log(selected);
        if(selected.length)
            await axios.put(`${URL}/hall/seats/book`, {theaterId:theaterId, hallId:hallId, seats:selected});
    }

    return ( 
        <div className = "Booking" >
            {
               loading ? <div></div> :  
               <Router>
                   <Switch>
                    <Route path={`${path}/seats`}> <SeatingLayout bookSeats={bookSeats} hallId={hallId} theaterId={theaterId}/> </Route>
                    <Route path={`${path}/ticket`}> <Ticket /> </Route>
                   </Switch>
               </Router>
            }        
        </div>
    );
}
