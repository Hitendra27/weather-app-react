import React, {useState} from 'react';
import axios from 'axios';

function App() {
  //65°F

  // https://api.openweathermap.org/data/2.5/weather?q=london&mode=json&units=imperial&appid=a48b62aeccaceb54eb69b143f96d536b
  // https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a48b62aeccaceb54eb69b143f96d536b

  //&mode=json&units=imperial

  // Temperature is available in Fahrenheit, Celsius and Kelvin units. Kelvin is used by default, with no need to use the units parameter in API calls.

  // For temperature in Fahrenheit, use "units=imperial".

  // For temperature in Celsius, use "units=metric".

  // You can find examples of API calls in the documentation for the service you are interested in.

  // A full list of all API parameters, with units, can be found here.

  // What are the weather condition codes and icons?

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&mode=json&units=metric&appid=a48b62aeccaceb54eb69b143f96d536b`;

  function searchLocation(event) {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
