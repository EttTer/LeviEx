import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import { JourneyDetail } from "../JourneyDetail";
import { SelectedSeat } from "../SelectedSeat";
import { useNavigate } from "react-router-dom";
import { SeatPicker } from "../SeatPicker";

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);

  const handleOnSeatSelected = () => {
    setUserSeat();
  };

  const navigate = useNavigate();

  const handleJourneyChange = (detail) => {
    setJourney(detail);
  };

  console.log(journey);

  const handleBuy = () => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "create",
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/reservation/${data.results.reservationId}`);
      });
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker
            seats={journey.seats}
            journeyId={journey.journeyIdn}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />

          <div className="controls container">
            <button
              onClick={() => handleBuy()}
              className="btn btn--big"
              type="button"
            >
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};

/* tohle bylo pod JourenyDetail -<SelectedSeat number={journey.autoSeat} />*/
