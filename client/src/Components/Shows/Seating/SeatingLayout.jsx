import React from 'react';
import Seat from './Seat';

export default function SeatingLayout() {

    const [row, col] = [26, 20];

    const rows = [];
    

    for(let i = 1; i <= row; i++){
        const cols = [];
        for(let j = 1; j <= col; j++){
            const newCol = (<Seat row={i} col={j}/>)
            cols.push(newCol);
        }
        const newRow = (
            <div class='row ml-5'>
                {cols}
            </div>
        )
        rows.push(newRow);
    }

    return(
      
        <div class=' p-3 justify-content-center align-items-center m-auto' style={{height: "70vh"}}>

            {rows}

        </div>
    )
}