import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filterName, setFilterName] = useState('first')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handlerFilterNameChange = (e) => {
    const filteredValue = e.target.value;
    if(filteredValue!==''){
      const filtered = persons.filter((el)=> {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setFilteredPersons(filtered)
    }
    else {
      setFilteredPersons([])
    }
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
      filter: <input onChange={handlerFilterNameChange} />
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
      <h2>Filtered Numbers</h2>
      {
        filteredPersons.map((e)=><div key={e.name}>{e.name} - {e.number}</div>)
      }
      
      <div>debug: {newName} {newNumber} {filterName}</div>
    </div>

  )
}

export default App