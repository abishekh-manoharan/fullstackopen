import axios from 'axios'
const URL = 'http://localhost:3001/persons'

const addNumber = (number) => axios.post(URL, number).then(res=>res.data)

const deleteNumber = (id) => axios.delete(`${URL}/${id}`)

const getAllNumbers = () => axios.get(URL).then(res=>res.data)

const updateExistingUser = (id, updatedUser) => axios.put(`${URL}/${id}`, updatedUser).then(res=>res.data)

export default { addNumber, deleteNumber, getAllNumbers, updateExistingUser }