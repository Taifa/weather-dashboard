import { useState } from "react";

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  return (
    <form
      className="flex gap-2 text-white"
      onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(city);
      }}
    >
      <input
        className="bg-gray-700 border-gray-900 rounded-lg px-3 py-2"
        type="text"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button className="bg-gray-700 rounded-lg p-1">Enter</button>
    </form>
  );
}

export default SearchBar;
