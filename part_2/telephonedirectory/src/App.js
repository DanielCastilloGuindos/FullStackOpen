import React, { useState } from 'react'

const INIT_VALUE_NEW_NAME = '';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState(INIT_VALUE_NEW_NAME)

  const handleChangeName = (event) => {
    const { value } = event.target;
    setNewName(value);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!newName) return;

    if (isExistNewName()) {
      alert(`${newName} is already added to phonebook`);
      return;
    };
    
    addNewPerson();
    setNewName(INIT_VALUE_NEW_NAME);
  }

  const addNewPerson = () => {
    setPersons([
      ...persons,
      {
        name: newName,
      }
    ]);
  }

  const isExistNewName = () => {
    let hasNewName = false;
    persons.map(person => person.name === newName && (hasNewName = true))
    return hasNewName;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <p key={person.name}>{person.name}</p>)
      }
    </div>
  )
}

export default App