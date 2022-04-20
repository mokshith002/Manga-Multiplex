import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Seat from './Seat';
import axios from 'axios';

export default function SeatingLayout(props) {


    const URL = `http://localhost:${5000}`;

    const {hallId, theaterId} = props;

    const [selected, setSelected] = React.useState([]);
    const [booked, setBooked] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [reload, setReload] = React.useState(false);

    const seats = [];

    const getSeats = async () => {
        const res = await axios.get(`${URL}/hall/${hallId}/${theaterId}/seats`);
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
                return(
                <div class="row _row" key={`row-${index}`}>
                    {
                        seat_row.map((ele, _index) => (<Seat key={`cell-${index}-${_index}`} seatNo={ele.seatno} booked={ele.isbooked} handleClick={updateSelectedSeats}/>))
                    }
                </div>
                )
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
                return prev.filter(ele => ele != seatNo);
            else 
                return [...prev, seatNo]
        })
    }

    const bookSeats = async () => {
        console.log(selected);
        if(selected.length)
            await axios.put(`${URL}/hall/seats/book`, {theaterId:theaterId, hallId:hallId, seats:selected});
        setReload(prev => !prev);
        setSelected([]);
    }
    

    return(
        <div class="p-5 container">
            <div class="row text-center">
            <h2 class="mb-5">Select Seats</h2>
                <div class="col-12">
            <div class="btn-dark btn" onClick={bookSeats}>
                Book Seats
            </div>
                </div>
            </div>
        <div class="p-5 d-flex justify-content-center align-items-center seating-layout">
            <div class=' _container' >
                {rows}
             </div>
        </div>
        </div>
        
    )
}