import React, { useEffect } from "react";
import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import peopleService from "./services/People";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");

  useEffect(() => {
    console.log("effect");
    peopleService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} aleready added!`);
    } else {
      peopleService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const deletePerson = (event) => {
    event.preventDefault();
    const id = event.target.value;
    const personToDelete = persons.find((person) => person.id === id);

    if (window.confirm(`Delete?`)) {
      peopleService
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id ==! id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <h3>Search person</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
      <ul>
        {Object.values(persons).map((person, key) => (
          <li key={key}>{person.name}</li>
        ))}
      </ul> */}

      <h3>Add person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToDisplay={persons} handleRemove={deletePerson} />
    </div>
  );
};

export default App;
