// Imports
import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";

// Securely grabbing API key and storing it in a variable
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  // Setting state
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* Creating an async function that dictates something
    inside the function will have the await keyword
  */
  async function fetchWeather(city) {
    /* Using try keyword to attempt something 
      and if it doesn't work it'll move to the catch
    */
    try {
      setError(null);
      // Setting loading state
      setLoading(true);

      // Grabbing API data

      const [data, data1] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`,
        ),
      ]);

      if (!data.ok || !data1.ok) {
        throw new Error("City not found");
      }

      // Converting API data to JSON
      const weatherData = await data.json();
      const forecastData = await data1.json();
      const filteredForecast = forecastData.list.filter((item) => {
        return item.dt_txt.includes("12:00:00");
      });

      // Setting weather state
      setWeather(weatherData);
      setForecast(filteredForecast);
      console.log(weatherData);
      console.log(filteredForecast);
    } catch (error) {
      // Setting error state
      setError(error);
      setWeather(null);
      setForecast(null);
      // Finally runs after try or catch
    } finally {
      setLoading(false);
    }
  }

  return (
    /* My main container it has the SearchBar component and displays the
    WeatherCard component only if the weather state isn't null
    */
    <main className="flex justify-center items-center h-screen flex-col gap-8">
      <SearchBar fetchWeather={fetchWeather} />
      {error && (
        <h1 className="text-red-700">The city you have entered is invalid</h1>
      )}
      {loading && (
        <div className="border rounded-full animate-spin w-8 h-8"></div>
      )}
      {weather && <WeatherCard weather={weather} forecast={forecast} />}
      {forecast && <ForecastCard forecast={forecast} />}
    </main>
  );
}

export default App;
