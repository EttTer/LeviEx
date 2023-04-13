import React from "react";
import "./style.css"
import { Seat } from "../Seat";

const testRow = [
    {
      number: 33,
      isOccupied: false,
    },
    {
      number: 29,
      isOccupied: true,
    },
    {
      number: 25,
      isOccupied: false,
    },
  ];

export const SeatRow=({row})=>{
    console.log(row)
    return (  <div className="seat-row">
    {row.map((test)=><Seat key={test.number} number={test.number} isOccupied={test.isOccupied}/>)
    }


    </div>)
}