import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Seat from './Seat';
import axios from 'axios';

export default function SeatingLayout(props) {

    const [row, col] = [20, 20];

    const URL = `http://localhost:${5000}`;

    const {hallId} = props;

    const matrix = new Array(row+1).fill(false).map(() => new Array(col+1).fill(false));
    const [selected, setSelected] = React.useState([...matrix]);
    
    for(let j = 1; j <= 20; j++) matrix[10][j] = true;
    
    const [booked, setBooked] = React.useState([...matrix]);

    const [rows, setRows] = React.useState([]);
    const seats = [];

    const getSeats = async () => {
        const res = await axios.get(`${URL}/hall/${hallId}/seats`);
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
            return seats.map((seat_row) => {
                return(
                <div class="row">
                    {
                        seat_row.map((ele) => (<Seat seatNo={ele.seatno} booked={ele.isbooked}/>))
                    }
                </div>
                )
            })  
        })
    }

    React.useEffect(() => {
        getSeats();
        setTimeout(createSeats, 100);        
    },[booked])

    const updateSelectedSeats = (seatNo) => {
        console.log(`${seatNo} selected`);
    }
    
    // console.log(`${ReactDOMServer.renderToString(rows)}`);

    return(
        
        <div class="p-5 d-flex justify-content-center align-items-center seating-layout">
            <div class=' _container' >
                {rows}
             </div>
        </div>
        
    )
}