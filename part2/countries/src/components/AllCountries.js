import React from 'react'

const AllCountries = ({countriesToDisplay}) => {
  return (
    <div>
      {countriesToDisplay.map((country,key) =>
        <div key={key}>{country.name.common}</div>)}
    </div>
  )
}

export default AllCountries