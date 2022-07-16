import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search countries..."
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
      </div>
      <ul>
        {React.Children.toArray(
          results.map((item) => <li>{item.name.common}</li>)
        )}
      </ul>
    </>
  );
}

export default App;
