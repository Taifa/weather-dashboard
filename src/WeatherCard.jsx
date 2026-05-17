function WeatherCard({ weather }) {
  return (
    <div>
      <h1>Temp: {weather.main.temp}</h1>
      <h1>Wind Spped: {weather.wind.speed}</h1>
      <h1>{weather.weather[0].description}</h1>
      <h1>{weather.main.temp_min}</h1>
      <h1>{weather.main.temp_max}</h1>
      <h1>{weather.main.feels_like}</h1>
    </div>
  );
}

export default WeatherCard;
