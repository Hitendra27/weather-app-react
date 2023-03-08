import React, {useState} from 'react';
import axios from 'axios';

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a48b62aeccaceb54eb69b143f96d536b`
  // api key = 2e21339ef35efcc7b3f5005848939c55
  //2e21339ef35efcc7b3f5005848939c55
  // a48b62aeccaceb54eb69b143f96d536b

  // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a48b62aeccaceb54eb69b143f96d536b

  // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=a48b62aeccaceb54eb69b143f96d536b

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>65 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
