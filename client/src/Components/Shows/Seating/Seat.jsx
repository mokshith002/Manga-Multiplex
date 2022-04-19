import React from 'react'


export default function Seat(props){
    const {seatNo, booked} = props;

    const [selected, setSelected] = React.useState(false);

    const styles = {
        backgroundColor: booked? "#DCDCDC" : selected ? "#5CB85C" : "white",
        cursor: booked ? "default" : "pointer",
    }

    const toggleSelect = () => {
        setSelected(prev => !prev);
    }


     return(
        <div class="col seat mt-2 mb-2 col-md-5" onClick={toggleSelect}>
            {seatNo}
        </div>
     )
}