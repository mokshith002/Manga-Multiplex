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
        })
    }

    const createSeats = () => {
        setRows(() => {
            return seats.map((seat_row, index) => {
                return(
                <div class="row" key={`row-${index}`}>
                    {
                        seat_row.map((ele, _index) => (<Seat key={`cell-${index}-${_index}`} seatNo={ele.seatno} booked={ele.isbooked} handleClick={updateSelectedSeats}/>))
                    }
                </div>
                )
            })  
        })

        initalize();
    }

    const initalize = () => {
        setBooked(() => {
            return seats.map((seat_row) => {
                const row1 =  seat_row.map((ele) => {console.log(ele.isbooked); return ele.isbooked});
                console.log(row1);
                return row1;
            })
        })

        setSelected(() => {
            return seats.map((seat_row) => {
                return seat_row.map(() => false)
            })
        })
        console.log(booked);
        console.log(selected);

        if(!booked.length || !selected.length) setReload(prev => !prev);
    }

    React.useEffect(() => {
        getSeats();
        setTimeout(createSeats, 100); 
        console.log("Running") ;     
    },[reload])

    const updateSelectedSeats = (seatNo) => {
        const _row = seatNo.charCodeAt(0) - 'A'.charCodeAt(0);
        const _col = parseInt(seatNo.split('').splice(1).join());
        console.log(`Row - ${_row} and Col - ${_col - 1}`);
        setSelected((prev) => {
            const newState = prev;
            newState[_row][_col-1] = !newState[_row][_col - 1];
            return newState;
        })
    }
    

    return(
        
        <div class="p-5 d-flex justify-content-center align-items-center seating-layout">
            <div class=' _container' >
                {rows}
             </div>
        </div>
        
    )
}