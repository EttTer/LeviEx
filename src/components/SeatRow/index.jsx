import React from "react";
import "./style.css";
import { Seat } from "../Seat";

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  console.log(row);

  return (
    <div className="seat-row">
      {row.map((test) => (
        <Seat
          key={test.number}
          number={test.number}
          isOccupied={test.isOccupied}
          isSelected={rowSelectedSeat === test.number}
          onSelect={onSeatSelected}
        />
      ))}
    </div>
  );
};
