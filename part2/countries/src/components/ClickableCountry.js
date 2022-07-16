const ClickableCountry = ({countriesToDisplay,showCountry}) => {
  return (
    <div>
    {countriesToDisplay.map((country,i) =>
      <div key={country.ccn3}>
      {country.name.common}
      <button type="button" value={country.name.common} onClick={showCountry}>show</button>
      </div>
    )}
    </div>
  )
}

export default ClickableCountry