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
      setPersons(persons.concat(personObject))
    }
    const upperCaseName = newName.toUpperCase()
    console.log('uppercase name: ', upperCaseName)

    persons.map(person => {
      const upperCasePerson = person.name.toUpperCase()
      if(upperCaseName === upperCasePerson) {
        console.log('uppercase person: ', upperCasePerson, 'true')
        setNewName('')
        setNewNumber('')
        return alert(`${newName} is already in the phonebook`)
      } else {
        console.log('uppercase person: ', upperCasePerson, 'false')
        setNewName('')
        setNewNumber('')
        return createPerson()
      }
    })
  }

 /*  const filterEntries = () => persons.map(person => {
    const upperCaseEntries = person.name.toUpperCase()
  }) */

  const renderPersons = () => persons.map(person =>
    <Person key={person.name} name={person.name} number={person.number}/>
  )

  //<p>Filter entries:</p> <input onChange={(event) => filterEntries(event.target.value)}/>

  return (
    <div>

      <h2>Phonebook</h2>
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