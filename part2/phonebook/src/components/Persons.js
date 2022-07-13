const Persons = (props) => {
    
    return (
        <ul>
        {props.allPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
         ))}
        </ul>
    )
}
export default Persons;