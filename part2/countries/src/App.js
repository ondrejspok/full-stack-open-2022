import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      {countries.map((val, key)=> {
         return <div key={key}> {val.name.common} </div>;
      })}
    </div>
  );
}

export default App;
