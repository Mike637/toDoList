import {useState, useEffect} from 'react';
import useGeolocation from '../../Hooks/useGeolocation';

const Weather = () => 
{
  const coords = useGeolocation();
  const ApiKey = "be0a6dba7106c7567950bf9f620052a7";
  const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coords.coordinate.lat}&lon=${coords.coordinate.lng}&appid=${ApiKey}`;
  console.log(url)
  const [location,setLocation] = useState({});
  useEffect(() => {
    fetch(url)
    .then(data =>data.json())
    .then(data =>  setLocation(data))
    .catch(error => console.log(error.message));
    },[url]);
    if (location.cod === 200)
    {
  return (
    <div className="Weather">
      <h1>Погода сегодня</h1>
    <p>{location.name}</p>
    <p>{location.weather[0].main}</p>
    <p>{location.weather[0].description}</p>
    <p>{location.main.temp}</p>
    <p>{location.main.feels_like}</p>
    <img alt="" src = {`http://api.openweathermap.org/img/w/${location.weather[0].icon}`}/>
    </div>
  )
    }
    else 
    {
      return (
        <div className="Weather">
          <h1>Погода</h1>
          <p>Error</p>
          <p>{JSON.stringify(location)}</p>
          </div>
      )
    }
  }

  export default Weather;