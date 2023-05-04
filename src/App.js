import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormAddPeople from './components/FormAddPeople'
import NumbersList from './components/NumbersList'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then((res)=>{
        setPersons(res.data)
      })
  }, [])

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
      
      <FormAddPeople handleNewNameAdd={handleNewNameAdd} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <NumbersList persons={persons}/>

      <Filter filteredPersons={filteredPersons} handlerFilterNameChange={handlerFilterNameChange}/>      
      <div>debug: {newName} {newNumber}</div>
    </div>

  )
}

export default App