import React from 'react'


export default function Seat(props){
    const {seatNo, booked, handleClick} = props;

    const [selected, setSelected] = React.useState(false);

    const styles = {
        backgroundColor: booked? "#DCDCDC" : selected ? "#5CB85C" : "white",
        cursor: booked ? "default" : "pointer",

    }

    const toggleSelect = () => {
        handleClick(seatNo);
        setSelected(prev => !prev);
    }

    const onHover = (e) => {
        if(e.type == "mouseover")
            e.target.style.backgroundColor = booked ? "#DCDCDC" : selected ? "#5CB85C" : "#cae8ca";
        else{
            e.target.style.backgroundColor = booked ? "#DCDCDC" : selected ? "#5CB85C" : "white";  
        }
    }


     return(
        <div class="col seat mt-2 mb-2 col-md-5" style={styles} onClick={toggleSelect} onMouseOver={onHover} onMouseOut={onHover}>
            {seatNo}
        </div>
     )
}