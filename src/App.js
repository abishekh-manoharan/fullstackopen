import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormAddPeople from './components/FormAddPeople'
import NumbersList from './components/NumbersList'
import phoneNumberService from './services/phoneNumber'
import Status from './components/Status'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [status, setStatus] = useState('')

  useEffect(()=>{
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

    if(a) { 
      const confirm = window.confirm(`person with name ${newName} already exists. Update the number?`)
      if (confirm) {
        const updatedUser = {...a, number: newNumber}
        phoneNumberService
          .updateExistingUser(a.id, updatedUser)
          .then((user)=>{
            const updatedPersons = persons.map((person)=>{
              if(person.id === user.id) {
                return updatedUser
              }
              else{
                return person
              }
            })

            setPersons(updatedPersons)
          })
          .catch(()=>{
            setStatus('couldn\'t update.')
            setTimeout(()=>{setStatus(null)}, 2000)
          })
      }
    }

    else {
      const phoneNumber = {name: newName, number: newNumber}
      phoneNumberService.addNumber(phoneNumber).then(e=>{
        console.log(e);
        setPersons(persons.concat(e))
      })
      // setStatus(`${newName} has been added.`)
      // setTimeout(()=>{
      //   setStatus('')
      // }, 3000)

    }
  }

  const handleDeleteClick = (id) => {
    window.confirm('delete?') ? 
      phoneNumberService.deleteNumber(id)
        .then((res)=>{
          console.log('returned from delete:'+res);
          setPersons(res)
        }
      )
    :
    console.log('no delete');
  }


  // React elements
  return (
    <div>
      <Status status={status}/>
      <h2>Phonebook</h2>
      <FormAddPeople handleNewNameAdd={handleNewNameAdd} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <NumbersList persons={persons} handleDeleteClick={handleDeleteClick}/>

      <Filter filteredPersons={filteredPersons} handlerFilterNameChange={handlerFilterNameChange}/>      
      <div>debug: {newName} {newNumber}</div>
    </div>

  )
}

export default App