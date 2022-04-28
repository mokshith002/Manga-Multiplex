import React, {useState, useEffect} from "react";
import axios from "axios";
import Ticket from "./Ticket";
import { useHistory } from "react-router-dom";

export default function TicketHolder(props){

    const { hallId, bookedSeats, time, price, showId } = props.details;

    console.log(props.details);

    const history = useHistory();

    const handleClick = () => {history.push('/movies')}

    const URL = process.env.REACT_APP_SERVER;

    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState({
        ticketId: null,
        seatNo:null
    });

    const addTickets = async (seatNo) => {
        const empId = parseInt(localStorage.getItem('userId'));
        const res = await axios.post(`${URL}/ticket`, {
            showId: showId,
            employeeId: empId,
            seatNo: seatNo
        });
        setDetails({
            ticketId: res.data.ticketid,
            seatNo: res.data.seatno
        })
    }

    const getDetails = async () => {
        bookedSeats.forEach(seat => {
            addTickets(seat);
        });
    }

    const addCard = async () => {
        setCards((prev) => [
            ...prev,
            <Ticket
                ticketId={details.ticketId}
                hallId={hallId}
                seats={details.seatNo}
                time={time}
                price={price}
            />
        ])
    }

    useEffect(() => {
        if(details.ticketId)
            addCard();
    }, [details]);

    useEffect(() => {
        getDetails();
    },[])

    return (
      <>
        <div className="row text-center">
            <h2 className="mb-5 __heading">Ticket Summary</h2>
            <div className="col-12">
                <div className="btn-success btn mb-5" onClick={handleClick}>
                    Continue
                </div>
            </div>
        </div>
        <div className="ticket-container">
          <div className="container p-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3" style={{width:"100%"}}>
              {cards}
            </div>
          </div>
        </div>
      </>
    );
}
