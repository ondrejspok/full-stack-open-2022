import React, { useEffect, useState } from "react";
import axios from "axios";
import Countries from "./components/Coutries";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  const countriesToDisplay = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const showCountry = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }
  
  return (
    <>
    <div>
      <h2>Countries Finder</h2>
    <input value={searchTerm} onChange={handleSearchChange} placeholder="Search..."/>
    </div>
    <Countries searchTerm={searchTerm} countriesToDisplay={countriesToDisplay} showCountry={showCountry}/>
    </>
  );
}

export default App;
