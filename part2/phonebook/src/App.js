import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, [searchTerm]);

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
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
     setSearchTerm(event.target.value);
   };
   
  React.useEffect(() => {
    setSearchResults([])
    persons.filter(val=>{
      if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
      {
        setSearchResults(results=>[...results, val]);

      }
    })
   }, [searchTerm]);
 

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Search person</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
        <ul>
        {searchResults.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>

      <h3>Add person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons allPersons={persons} />
    </div>
  );
};

export default App;
