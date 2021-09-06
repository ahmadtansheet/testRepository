import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [city , setcity] = useState("")
  const [weather , setweather] = useState("")

 const getWeather = (e) =>{
  e.preventDefault();
 //console.log(city)
 }

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7d6fc6caabfadc5fbe5aa7566734ab9`)

  .then(function (response) {
    setweather((response.data.main.temp -273.15).toFixed(2))
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  return (
    <>
    <h1>Weather App</h1>
    <form onSubmit={getWeather}>
    <input type="text" value={city} onChange={(e)=>setcity(e.target.value)}></input>
    
    <input type="submit" value="search"></input>
   

   </form>
  <p>{weather}</p>
  <p>location is {city}</p>
  </>
  )
}

export default App
