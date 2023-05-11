import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormAddPeople from './components/FormAddPeople'
import NumbersList from './components/NumbersList'
import phoneNumberService from './services/phoneNumber'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

  useEffect(()=>{
    // axios.get('http://localhost:3001/persons')
    //   .then((res)=>{
    //     setPersons(res.data)
    //   })
    phoneNumberService
      .getAllNumbers()
      .then((res)=>{
          setPersons(res)
        }
      )
  }, [])


  // HANDLER FUNCTIONS
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
      const phoneNumber = {name: newName, number: newNumber}
      phoneNumberService.addNumber(phoneNumber).then(e=>setPersons(persons.concat(e)))
    }
  }

  const handleDeleteClick = (id) => {
    
    window.confirm('delete?') ? 
      phoneNumberService.deleteNumber(id)
        .then(()=>{
          phoneNumberService.getAllNumbers().then((res)=>setPersons(res))
        }
      )
    :
    console.log('no delete');
  }


  // React elements
  return (
    <div>
      <h2>Phonebook</h2>
      
      <FormAddPeople handleNewNameAdd={handleNewNameAdd} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <NumbersList persons={persons} handleDeleteClick={handleDeleteClick}/>

      <Filter filteredPersons={filteredPersons} handlerFilterNameChange={handlerFilterNameChange}/>      
      <div>debug: {newName} {newNumber}</div>
    </div>

  )
}

export default App