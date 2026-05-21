// Function that takes the weather state as a parameter
function WeatherCard({ weather }) {
  const weatherDetails = [
    {
      label: "Wind Speed: ",
      data: Math.round(weather.wind.speed),
      unit: " mph",
    },
    {
      label: "Weather: ",
      data:
        weather.weather[0].description[0].toUpperCase() +
        weather.weather[0].description.slice(1),
    },
    {
      label: "Min temp: ",
      data: Math.round(weather.main.temp_min),
      unit: "°F",
    },
    {
      label: "Max temp: ",
      data: Math.round(weather.main.temp_max),
      unit: "°F",
    },
  ];
  return (
    /* There is a lot going on here because there are a lot of nested containers (for styling reasons)
    But the gist is that this mess is just grabbing the weather data from the API object
     */
    <div className="bg-gray-800 p-4 rounded-lg w-1/2 mx-auto text-white ">
      <div className="flex flex-col gap-3 mb-4">
        <h1 className="text-4xl text-center">{weather.name}</h1>
        <p className="text-2xl text-center">
          {Math.round(weather.main.temp)}°F
        </p>
        <p className="text-lg text-center">
          Feels like: {Math.round(weather.main.feels_like)}°F
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        {weatherDetails.map((item) => {
          return (
            <div className="border bg-gray-700 p-3 rounded-lg" key={item.label}>
              <p>
                {item.label} {item.data} {item.unit}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherCard;
