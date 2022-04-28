import React from "react";
import "./Ticket.css";
import { useHistory } from "react-router-dom";

function Ticket(props) {
  const { ticketId, hallId, seats, time, price } = props;

  const poster = localStorage.getItem("moviePoster");

  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem("moviePoster");
    history.push("/movies");
  };

  return (
    <div className="_ind-ticket">

      <div className="_card _small-poster">
        <div className="_ticket-id">Ticket ID - {ticketId}</div>
        <img
          src={poster}
          width="240px"
          height="300px"
          style={{ marginTop: 25, marginBottom: 25 }}
        />
        <div className="_details">Price - {price}</div>
        <div className="_details">Hall ID - {hallId}</div>
        <div className="_details">Seats - {seats}</div>
        <div className="_details">Movie Time - {time}</div>
        <div className="_footnote">
          Thank you for booking with us. <br />
          Hope you have a fantastic experience.
        </div>
      </div>
    </div>
  );
}

export default Ticket;
