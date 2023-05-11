import axios from 'axios'
const URL = 'http://localhost:3001/persons'

const addNumber = (number) => {
    const promise = axios.post(URL, number)
    return promise.then(res=>res.data)
}

export default {addNumber}