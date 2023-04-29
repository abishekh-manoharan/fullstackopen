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
    e.preventDefault();
    const a = persons.find((e)=>{
      return e.name === newName
    })

    if(a) alert(`person with name ${newName} already exists`)
    else setPersons(persons.concat({name: newName}))
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