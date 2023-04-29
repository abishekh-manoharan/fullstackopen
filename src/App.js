import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 234567890 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleNewNameAdd = (e) => {
    e.preventDefault();
    const a = persons.find((e)=>{
      return e.name === newName
    })

    if(a) alert(`person with name ${newName} already exists`)
    else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewNameAdd}>
        <div>
          name: <input onChange={handleNameChange} />
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((e)=><div key={e.name}>{e.name} - {e.number}</div>)
      }
      <div>debug: {newName} {newNumber} </div>
    </div>

  )
}

export default App