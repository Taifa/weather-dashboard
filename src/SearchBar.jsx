// Import
import { useState } from "react";

// SearchBar function is grabbing the fetchWeather function from the App.jsx and using it as a parameter
function SearchBar({ fetchWeather, recentSearches }) {
  // Creating state for city
  const [city, setCity] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const dropList = () => {
    return (
      <div className="absolute top-full w-full bg-gray-800 border rounded-lg">
        <ul className="text-white">
          {recentSearches.map((item, i) => {
            return (
              <li
                key={i}
                onMouseDown={() => {
                  fetchWeather(item);
                  setCity(item);
                }}
                className="cursor-pointer"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    // My form container that has an onSubmit event listener that uses the fetchWeather function and prevents default
    <form
      className="flex gap-2 text-white relative"
      onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(city);
        setShowRecentSearches(false);
      }}
    >
      {/* Textbox input that has a onChange event listener that sets the city
      state to what the user entered */}
      <input
        className="bg-gray-700 border-gray-900 rounded-lg px-3 py-2"
        type="text"
        onChange={(e) => setCity(e.target.value)}
        onClick={() => {
          setShowRecentSearches(true);
        }}
        onBlur={() => {
          setShowRecentSearches(false);
        }}
      ></input>
      <button className="bg-gray-700 rounded-lg p-1">Enter</button>
      {showRecentSearches && dropList()}
    </form>
  );
}

export default SearchBar;
