import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    try {
      setLoading(true);
      console.log(API_KEY);
      console.log(city);
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`,
      );
      const weather = await data.json();
      setWeather(weather);
      console.log(weather);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-8">
      <SearchBar fetchWeather={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}

export default App;
