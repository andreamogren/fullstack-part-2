import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'
import ContactForm from './components/ContactForm'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {
  //useState functions and variables
  const [ persons, setPersons ] = useState([]) 
  const [ filteredPersons, setFilteredPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState('')
  
  //Fetching persons from database with useEffect hook
  useEffect(() => {    
    personService
      .getAll()
      .then(response => {
        const initialPersons = response
        setPersons(initialPersons)
        setFilteredPersons(initialPersons)
      })
  }, [])
    
/* Add person function */
  const addPerson = event => {
    event.preventDefault()
    
    //Creating a new entry 
    const createPerson = () => {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      //Sending new entry to phonebook database
      personService
        .create(personObject)
        .then(response => {
          setPersons([...persons, response])
          setFilteredPersons([...persons, response])
          setSuccessMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setSuccessMessage('')
          }, 5000)
        }) 
    }
    
    /* Comparing new entry to the ones in the phonebook */ 
    const upperCaseNewName = newName.toUpperCase()
    let doubleName
    persons.map(person => {
      const upperCasePerson = person.name.toUpperCase()
      if(upperCaseNewName === upperCasePerson) {
        //If the person doesn't exist in the phonebook, add them to the doubleName variable
        doubleName = upperCasePerson
      }
      return doubleName
    })
    
    //If double name is undefined, create a new entry (didn't use !doubleName since I don't know what other values it might return)
    if (doubleName === undefined) {
      createPerson()
    } else if(doubleName === upperCaseNewName) {
      alert(`${newName} is already in the phonebook`)
    }
    /* */
    
    setNewName('')
    setNewNumber('')
  }
  /* */
  
  /* Remove number function */
  const removeNumber = event => {
    const person = event.target.previousElementSibling
    const id = person.id
    if(window.confirm(`Delete ${person.innerHTML}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          personService
          .getAll()
          .then(response => {
            const updatedPersons = response
            setPersons(updatedPersons)
            setFilteredPersons(updatedPersons)
        })
      })
    }
  }
  /* */

  const filterEntries = event => {
      let filtered = persons.filter(person => {
        return person.name.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1
      })
    setFilteredPersons(filtered)
  }

  const renderPersons = () => filteredPersons.map(person =>
    <Person key={person.id} id={person.id} name={person.name} number={person.number} delete={(event) => removeNumber(event)}/>
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage}/>
      <Filter searchTerm={(event) => filterEntries(event)}/>
      <ContactForm 
        name={newName}
        number={newNumber}
        changeName={(event) => setNewName(event.target.value)} 
        changeNumber={(event) => setNewNumber(event.target.value)} 
        clickHandler={(event) => addPerson(event)}
      />
      <h2>Numbers</h2>
      {renderPersons()}
    </div>
  )
}

export default App