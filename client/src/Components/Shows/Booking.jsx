import React, {useState, useEffect} from "react";
import {useLocation, useRouteMatch, BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import axios from "axios";
import SeatingLayout from "./Seating/SeatingLayout";
import Ticket from "./Ticket";

export default function Booking() {
    
    const {path, url} = useRouteMatch();

    const URL = `http://localhost:${5000}`;

    const {search} = useLocation();

    const history = useHistory();
    // history.go(0);

    // let [searchParams, setSearchParams] = useSearchParams();
    const searchParams = new URLSearchParams(search);

    const showId = searchParams.get("showId");

    const [booked, setBooked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState({
        hallId: null,
        theaterId: null,
        time: null,
        bookedSeats:null,
        ticketId:null,
    })

    const getTheaterHall = async () => {
        const res = await axios.get(`${URL}/show/${showId}`);
        setShow(prev => ({
            ...prev,
            hallId: res.data.hallno,
            theaterId: res.data.theaterid,
            time: res.data.starttime,
        }))
        setLoading(false);
    }

    useEffect (() => {
        getTheaterHall();
    },[booked]);

    const bookSeats = async (selected) => {
        console.log(selected);
        if(selected.length){
            await axios.put(`${URL}/hall/seats/book`, {theaterId:show.theaterId, hallId:show.hallId, seats:selected});
            setShow(prev => ({
                ...prev,
                bookedSeats: selected,
                ticketId: 10
            }))
            setBooked(true);
        }
        else{
            history.push("/");
        }
    }

    return (
      <div className="Booking">
        {loading ? (
          <div></div>
        ) : booked ? (
          <Ticket details={show}/>
        ) : (
          <SeatingLayout
            bookSeats={bookSeats}
            hallId={show.hallId}
            theaterId={show.theaterId}
          />
        )}
      </div>
    );
}
