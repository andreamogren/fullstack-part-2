import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [filteredPersons, setFilteredPersons] = useState([...persons])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const createPerson = () => {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons([...persons, personObject])
      setFilteredPersons([...persons, personObject]) //varför går det inte att bara köra [...persons?]
    }

    const upperCaseNewName = newName.toUpperCase()
    let doubleName; 
    persons.map(person => {
      const upperCasePerson = person.name.toUpperCase()
      if(upperCaseNewName === upperCasePerson) {
        doubleName = upperCasePerson
      }
      return doubleName
    })
  
    if (doubleName === undefined) {
      createPerson()
    } else if(doubleName === upperCaseNewName) {
      alert(`${newName} is already in the phonebook`)
    }
    console.log(setNewName(''), setNewNumber(''))//verkar som att de inte finns inuti den här funktionen?
/*     this.setNewName = this.setNewName.bind(this);
    this.setNewName('') */ 
  }

  const filterEntries = event => {
      let filtered = persons.filter(person => {
        return person.name.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1
      })
    setFilteredPersons(filtered)
  }

  const renderPersons = () => filteredPersons.map(person =>
    <Person key={person.name} name={person.name} number={person.number}/>
  )
  
  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter entries:</p> <input onChange={(event) => filterEntries(event)}/>
      <form>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)}/>
          <br/>
          phone: <input onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPersons()}
    </div>
  )
}

export default App