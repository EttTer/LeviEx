import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
const [journey,setJourney]=useState("null") 
  

const handleJourneyChange=(detail)=>{
 setJourney(detail)
}
 
  
  return (<main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    <p key={
      journey.journeyId


    }> ID: {journey.journeyId}</p>
  </main>)
};
