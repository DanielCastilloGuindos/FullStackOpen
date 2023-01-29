import React, { useState } from 'react'

const INIT_VALUES = {
  NEW_NAME: '',
  NEW_PHONE: '',
};

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState(INIT_VALUES.NEW_NAME)
  const [ newPhone, setNewPhone ] = useState(INIT_VALUES.NEW_PHONE)

  const handleChangeName = (event) => {
    const { value } = event.target;
    setNewName(value);
  }

  const handleChangePhone = (event) => {
    const { value } = event.target;
    setNewPhone(value);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!newName) return;

    if (isExistingNewPerson()) {
      alert(`Name(${newName}) or number(${newPhone}) is already added to phonebook`);
      return;
    };
    
    addNewPerson();
    cleanForm();
  }

  const cleanForm = () => {
    setNewName(INIT_VALUES.NEW_NAME);
    setNewPhone(INIT_VALUES.NEW_PHONE);
  }

  const addNewPerson = () => {
    setPersons([
      ...persons,
      {
        name: newName,
        phone: newPhone,
      }
    ]);
  }

  const isExistingNewPerson = () => {
    let hasNewPerson = false;
    persons.map(person => {
      if (person.name === newName || person.phone === newPhone)
      hasNewPerson = true;
    });

    return hasNewPerson;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <p>
          name: <input value={newName} onChange={handleChangeName} />
        </p>
        <p>
          Number: <input value={newPhone} onChange={handleChangePhone} />
        </p>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <p key={person.name}>{person.name} - {person.phone}</p>)
      }
    </div>
  )
}

export default App