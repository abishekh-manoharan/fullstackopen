import axios from 'axios'

const URL = '/api/notes'

const getAll = () => axios.get(URL).then((res)=>{
    console.log('res.data : '+res);
    return res.data
})

const create = (newNote) => axios.post(URL, newNote).then((res)=>res.data)

const update = (id, updatedNote) => axios.put(`${URL}/${id}`, updatedNote).then(res=>res.data)

export default { getAll, create, update } 