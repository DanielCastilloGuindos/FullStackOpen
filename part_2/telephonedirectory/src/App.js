import React, { useState } from 'react'
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import { PersonList } from './Components/PersonList';

const INIT_VALUES = {
  FILTER: '',
  PERSONS: [
    { name: 'Arto Hellas',      phone: '040-123456' },
    { name: 'Ada Lovelace',     phone: '39-44-5323523' },
    { name: 'Dan Abramov',      phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]
};

const App = () => {
  const [ persons, setPersons ] = useState(INIT_VALUES.PERSONS) 
  const [ filter, setFilter ] = useState(INIT_VALUES.FILTER);


  const handleChangeFilter = (event) => {
    const { value } = event.target;
    setFilter( value );
  }

  const handleSubmitForm = ( newPerson, callback = () => {} ) => {
    return (event) => {
      event.preventDefault();
  
      if (!newPerson.name || !newPerson.phone) return;
  
      if (isExistingNewPerson( newPerson )) {
        alert(`Name(${newPerson.name}) or number(${newPerson.phone}) is already added to phonebook`);
        return;
      };
      
      addNewPerson( newPerson );
      callback();
    }
  };

  const addNewPerson = (newPerson) => {
    setPersons([
      ...persons,
      newPerson
    ]);
  }

  const isExistingNewPerson = ({ name, phone}) => {
    let hasNewPerson = false;
    persons.map(person => {
      if (person.name === name || person.phone === phone)
      hasNewPerson = true;
    });

    return hasNewPerson;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm handleSubmitForm={handleSubmitForm} />
      <h2>Numbers</h2>
      <Filter
        filter={ filter }
        handleChangeFilter={ handleChangeFilter } />
      <PersonList
        persons={ persons }
        filter={ filter } />
    </div>
  )
}

export default App