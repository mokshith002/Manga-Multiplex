import React from 'react'


export default function Seat(props){
    const {row, col} = props;

    console.log(row, col);

    const convert =  ['_', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

     return(
        <div class="col seat mt-2 mb-2 col-md-5" >
            {`${convert[row]}${col}`}
        </div>
     )
}