function ForecastCard({ forecast }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="flex gap-4  w-1/2 mx-auto text-white text-center justify-center">
      {forecast.map((item, i) => {
        return (
          <div key={item.dt_txt} className="bg-gray-800 p-4 rounded-lg">
            <p className="">
              {i === 0
                ? "Today"
                : daysOfWeek[new Date(item.dt_txt.slice(0, 10)).getDay()]}
            </p>
            <p>{Math.floor(item.main.temp_max)}°F</p>
            <p>
              {item.weather[0].description[0].toUpperCase() +
                item.weather[0].description.slice(1)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastCard;
