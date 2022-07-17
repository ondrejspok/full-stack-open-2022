const Persons = ({ personsToDisplay, handleRemove }) => {
  return (
    <ul>
      {personsToDisplay.map((person, key) => (
        <li key={key}>
          {person.name} {person.number}
          <button type="button" value={person.id} onClick={handleRemove}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Persons;
