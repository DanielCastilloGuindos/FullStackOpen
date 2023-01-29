import React, { useState } from 'react'

const INIT_VALUES = {
  FILTER: '',
  NEW_NAME: '',
  NEW_PHONE: '',
  PERSONS: [
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]
};

const App = () => {
  const [ persons, setPersons ] = useState(INIT_VALUES.PERSONS) 
  const [ newName, setNewName ] = useState(INIT_VALUES.NEW_NAME)
  const [ newPhone, setNewPhone ] = useState(INIT_VALUES.NEW_PHONE)
  const [ filter, setFilter ] = useState(INIT_VALUES.FILTER);
  const personsToShown = persons.filter(({ name, phone }) => 
    name.includes(filter) || phone.includes(filter)
  );

  const handleChangeName = (event) => {
    const { value } = event.target;
    setNewName(value);
  }

  const handleChangePhone = (event) => {
    const { value } = event.target;
    setNewPhone(value);
  }

  const handleChangeFilter = (event) => {
    const { value } = event.target;
    setFilter( value );
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
      <p>Filter shown with <input value={filter} onChange={handleChangeFilter} /></p>
      {
        personsToShown.map((person) => <p key={person.name}>{person.name} - {person.phone}</p>)
      }
    </div>
  )
}

export default App