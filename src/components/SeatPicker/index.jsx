import React from "react";
import "./style.css"
import { Seat } from "../Seat";
import { SeatRow } from "../SeatRow";


export const SeatPicker = ({seats, journeyId, selectedSeat, onSeatSelected})=> {
    console.log(seats)


    return (<>
   

  <div className="seat-picker container">
    <h2>Vyberte sedadlo</h2>
    <div className="seats">

        {seats.map((seat, index)=> <SeatRow key={index} row={seat} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>)}
        
    
      <div className="seat-row">
  
      </div>
    </div>
  </div></>)
}