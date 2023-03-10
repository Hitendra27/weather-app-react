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

  // | {data.sys.country}

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
            {data.weather ? <p> {data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">
                {data.weather ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
              </p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">
                {data.weather ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
              </p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">
                {data.weather ? (
                  <p className="bold">{data.wind.speed.toFixed()}MPH</p>
                ) : null}
              </p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
