import React, { useState } from 'react'

const Person = (props) => {
  return(
    <>
    <p>{props.name} {props.number}</p>
    </>
  )
}
const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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

    setNewName('') //detta funkar inte längre?
    setNewNumber('') //detta funkar inte längre? 
  }

  //Filter thingy
  let filteredPersons = [...persons]
  console.log("filtered persons, before: ", filteredPersons)
  const filterEntries = event => {
   filteredPersons = persons.filter(person => { 
      console.log("filtered persons, inside filter: ", filteredPersons)
      return person.name.indexOf(event.target.value) !== -1
    }) 
    console.log("filtered persons, after: ", filteredPersons)
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