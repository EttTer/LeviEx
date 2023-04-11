import React from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
    console.log(journey)
    return (
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
             <BusStop name="Praha" station="Florenc" time="10"/>
               
            </div>
        </div>
    )
}

/*<BusStop key={stop.code} name={stop.name} station={stop.station} time={stop.time} />*/