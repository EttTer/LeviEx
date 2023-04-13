import React from "react";
import "./style.css"
import { Seat } from "../Seat";

export const SeatPicker = ()=> {
    return (<>
    

  <div className="seat-picker container">
    <h2>Vyberte sedadlo</h2>
    <div className="seats">
     <Seat number= "1"/> 
     <Seat number= "5"/> 
      <div className="seat-row">
  
      </div>
    </div>
  </div></>)
}