import { useState } from "react";

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchWeather(city);
      }}
    >
      <input type="text" onChange={(e) => setCity(e.target.value)}></input>
      <button>Enter</button>
    </form>
  );
}

export default SearchBar;
