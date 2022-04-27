import React from 'react';
import Seat from './Seat';
import axios from 'axios';
import { useSearchParams, useHistory, useOutletContext} from 'react-router-dom';
import './Seating.css'

export default function SeatingLayout(props) {


    const URL = `http://localhost:${5000}`;

    const {bookSeats, hallId, showId} = props;
    

    const [selected, setSelected] = React.useState([]);
    const [booked, setBooked] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [reload, setReload] = React.useState(false);

    const seats = [];

    const getSeats = async () => {
        const res = await axios.get(`${URL}/hall/${hallId}/${showId}/seats`);
        for(let i = 0; i < 26; i++)
            seats.push([]);
        res.data.forEach((ele) => {
            const {seatno, isbooked} = ele;
            let _row = seatno.charCodeAt(0) - 'A'.charCodeAt(0);
            seats[_row].push({seatno, isbooked});
            if(isbooked) setBooked(prev => [...prev, seatno]);
        })
    }

    const createSeats = () => {
        setRows(() => {
            return seats.map((seat_row, index) => {
                const width = seat_row.length
                return (
                  <div
                    className="row _row col"
                    key={`row-${index}`}
                    style={{width:"fit-content"}}
                  >
                    {seat_row.map((ele, _index) => (
                      <Seat
                        key={`cell-${index}-${_index}`}
                        seatNo={ele.seatno}
                        booked={ele.isbooked}
                        handleClick={updateSelectedSeats}
                      />
                    ))}
                  </div>
                );
            })  
        })
    }

    

    React.useEffect(() => {
        getSeats();
        setTimeout(createSeats, 100); 
    },[reload])

    const updateSelectedSeats = (seatNo) => {
        if(booked.includes(seatNo)) return;
        setSelected((prev) => {
            if(prev.includes(seatNo))
                return prev.filter(ele => ele !== seatNo);
            else 
                return [...prev, seatNo]
        })
    }

    

    const handleClick = () =>{
        bookSeats(selected);
    }
    

    return (
      <div className="p-5 container">
        <div className="row text-center">
          <h2 className="mb-5 _heading">Select Seats</h2>

          <div className="col-12">
            <div className="btn-dark btn" onClick={handleClick}>
              Book Seats
            </div>
          </div>
        </div>

        <div className="p-5 d-flex justify-content-center align-items-center seating-layout">
          <div className="_container-seats align-items-center justify-content-center">
            {rows}
          </div>
        </div>
      </div>
    );
}