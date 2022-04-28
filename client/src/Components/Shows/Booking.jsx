import React, { useState, useEffect } from "react";
import {
  useLocation,
  useRouteMatch,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import SeatingLayout from "./Seating/SeatingLayout";
import Ticket from "./Ticket/Ticket";
import TicketHolder from "./Ticket/TicketHolder";

export default function Booking() {
  const { path, url } = useRouteMatch();

  const URL = `http://localhost:${5000}`;

  const { search } = useLocation();

  const history = useHistory();
  
  if(!localStorage.getItem('userId')) history.push('/login');

  const searchParams = new URLSearchParams(search);

  const showId = searchParams.get("showId");

  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState({
    hallId: null,
    showId: showId,
    time: null,
    price: null,
    bookedSeats: null
  });

  const getTheaterHall = async () => {
    const res = await axios.get(`${URL}/show/${showId}`);
    setShow((prev) => ({
      ...prev,
      hallId: res.data.hallno,
      showId: res.data.showid,
      time: res.data.starttime,
      price: res.data.price,
    }));
    setLoading(false);
  };

  useEffect(() => {
    getTheaterHall();
  }, [booked]);

  const bookSeats = async (selected) => {
    if (selected.length) {
      console.log(selected);
      await axios.put(`${URL}/hall/seats/book`, {showId:show.showId, hallId:show.hallId, seats:selected});
      setShow((prev) => ({
        ...prev,
        bookedSeats: selected,
      }));
      setBooked(true);
    } else {
      history.push("/");
    }
  };


  return (
    <div className="Booking">
      {loading ? (
        <div></div>
      ) : booked ? (
        <TicketHolder details={show}/>

        ) : (
        <SeatingLayout
          bookSeats={bookSeats}
          hallId={show.hallId}
          showId={show.showId}
        />
      )}
    </div>
  );
}
