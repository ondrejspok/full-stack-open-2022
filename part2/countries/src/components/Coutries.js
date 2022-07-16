import React from 'react'
import Country from './Country'
import ClickableCountry from './ClickableCountry'
import AllCountries from './AllCountries'

const Countries = ({searchTerm,countriesToDisplay,showCountry}) => {

  if (countriesToDisplay.length === 1) {
    return ( <Country country={countriesToDisplay[0]} /> )
  }
  else if(countriesToDisplay.length<=10){
    return ( <ClickableCountry countriesToDisplay={countriesToDisplay} showCountry={showCountry} /> )
  }
  else if (searchTerm === "") {
    return ( <AllCountries countriesToDisplay={countriesToDisplay} /> )
  }
  else {
    return ( <div>Too many matches, specify another filter</div>  )
  }
}

export default Countries