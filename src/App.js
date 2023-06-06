import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormAddPeople from './components/FormAddPeople'
import NumbersList from './components/NumbersList'
import phoneNumberService from './services/phoneNumber'
import countriesService from './services/countries'
import Status from './components/Status'

const App = () => {
  countriesService.getAll()
    .then(res=>{console.log(res)})
}

export default App