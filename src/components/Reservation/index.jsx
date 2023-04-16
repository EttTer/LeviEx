import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { JourneyDetail } from "../JourneyDetail";
import "./style.css";

export const Reservation = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${reservationId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReservation(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="reservation container" key={reservationId}>
      <h2>Vaše e-jízdenka č. {reservationId} </h2>
      {reservation === null ? null : (
        <>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd: </p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p> {reservation.date}</p>
              <p>
                {reservation.fromCity.name} {reservation.fromCity.time}
              </p>
              <p>
                {reservation.toCity.name} {reservation.toCity.time}
              </p>
              <p> {reservation.seatNumber}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
