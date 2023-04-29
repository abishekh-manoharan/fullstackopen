import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNameAdd = (e) => {
    console.log('====================================');
    console.log('click');
    console.log('====================================');
    e.preventDefault();
    setPersons(persons.concat({name: newName}))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewNameAdd}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((e)=><div key={e.name}>{e.name}</div>)
      }
      <div>debug: {newName}</div>
    </div>

  )
}

export default App