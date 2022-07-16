import React from "react";
// import Weather from './Weather.js'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <img
          alt="Country Flag"
          src={country.flags.svg}
          height="100"
          width="100"
        />
      </div>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
        </ul>
      </div>
      {/* <h3>Weather in {country.capital}</h3>
      <Weather city={country.capital} /> */}
    </div>
  );
};

export default Country;
