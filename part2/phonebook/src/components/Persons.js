const Persons = ({personsToDisplay}) => {
    
    return (
        <ul>
        {personsToDisplay.map((person, key) => (
          <li key={key}>
            {person.name} {person.number}
          </li>
         ))}
        </ul>
    )
}
export default Persons;