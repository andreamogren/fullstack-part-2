import React, { useState } from 'react'

const Number = (props) => {
  return(
    <>
    <p>{props.name}</p>
    </>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson= (event) => {
    console.log(newName)
    event.preventDefault()
    const createPerson = () => {
      const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
    }
    console.log(typeof newName)
    persons.filter(newName => (
      newName ? alert(`${newName} is already in the phonebook`) : createPerson()  
    ))
    setNewName('')
  }

  const renderPersons = () => persons.map(person =>
    <Number key={person.name} name={person.name}/>
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)}/>
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