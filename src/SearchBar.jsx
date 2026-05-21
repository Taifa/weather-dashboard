// Import
import { useState } from "react";

// SearchBar function is grabbing the fetchWeather function from the App.jsx and using it as a parameter
function SearchBar({ fetchWeather }) {
  // Creating state for city
  const [city, setCity] = useState("");

  return (
    // My form container that has an onSubmit event listener that uses the fetchWeather function and prevents default
    <form
      className="flex gap-2 text-white"
      onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(city);
      }}
    >
      {/* Textbox input that has a onChange event listener that sets the city
      state to what the user entered */}
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
