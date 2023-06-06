import axios from "axios"; 

const URL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => {
    return axios.get(URL)
        .then(res=>res.data)
}

export default { getAll }