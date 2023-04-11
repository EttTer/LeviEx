import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';



export const CityOptions = ({ cities }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {cities.map((city) => (
          <option key={city.code} value={city.code}>{city.name}</option>
        ))}
      </>
    )
  }


export const JourneyPicker = ({ onJourneyChange }) => {


  const [fromCity,setFromCity]=useState("")
  const [toCity,setToCity]=useState("")
  const [date,setDate]=useState("")
  const [cities,setCities]= useState([
    { name: 'Praha', code: 'CZ-PRG' },
    { name: 'Brno', code: 'CZ-BRQ' },
  ])

  
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(fromCity, toCity, date);
  }
  
useEffect(()=>{
  fetch ("https://apps.kodim.cz/daweb/leviexpress/api/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.results)
      })

},[])
  
 
return <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form   onSubmit={handleSubmit}
      className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select 
          value={fromCity}
          onChange = {(event)=> {
            const from = event.target.value
            setFromCity(from)
          }}>
           <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select
          value={toCity}
          onChange = {(event)=> {
            const from = event.target.value
            setToCity(from)
          }}>
           <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select
          value={date}
          onChange = {(event)=> {
            const from = event.target.value
            setDate(from)
          }}>
            <option value="">Vyberte</option>
            <option value="datum01">Datum 01</option>
            <option value="datum02">Datum 02</option>
            <option value="datum03">Datum 03</option>
            <option value="datum04">Datum 04</option>
            <option value="datum05">Datum 05</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
};
