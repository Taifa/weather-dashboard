function WeatherCard({ weather }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-1/2 mx-auto text-white ">
      <div className="flex flex-col gap-3 mb-4">
        <h1 className="text-4xl text-center">{weather.name}</h1>
        <p className="text-2xl text-center">{weather.main.temp}°F</p>
        <p className="text-lg text-center">
          Feels like: {weather.main.feels_like}°F
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="border bg-gray-700 p-3 rounded-lg">
          <p>Wind Speed: {weather.wind.speed} mph</p>
        </div>
        <div className="border bg-gray-700 p-3 rounded-lg">
          <p>Weather: {weather.weather[0].description}</p>
        </div>
        <div className="border bg-gray-700 p-3 rounded-lg">
          <p>Min temp: {weather.main.temp_min}°F</p>
        </div>
        <div className="border bg-gray-700 p-3 rounded-lg">
          <p>Max temp: {weather.main.temp_max}°F</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
