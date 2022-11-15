import {useState, useEffect} from 'react';
import useGeolocation from '../../Hooks/useGeolocation';

const Weather = () => 
{
  const coords = useGeolocation();
  const ApiKey = "be0a6dba7106c7567950bf9f620052a7";
  const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coords.coordinate.lat}&lon=${coords.coordinate.lng}&appid=${ApiKey}`;
  const [location,setLocation] = useState({});
  useEffect(() => {
    fetch(url)
    .then(data =>data.json())
    .then(data =>  setLocation(data));
    },[url]);
    if (location.cod === 200)
    {
  return (
    <div>
    <p>Hello {coords.coordinate.lat} and {coords.coordinate.lng}</p>
    <p>{location.name}</p>
    <p>{JSON.stringify(location)}</p>
    <img alt="" src = {`http://api.openweathermap.org/img/w/${location.weather[0].icon}`}/>
    </div>
  )
    }
    else 
    {
      return (
        <div>
          <p>Error</p>
          </div>
      )
    }
  }

  export default Weather;