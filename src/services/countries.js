import axios from "axios"; 


const getAll = () => {
    const URL = "https://studies.cs.helsinki.fi/restcountries/api/all"
    return axios.get(URL)
        .then(res=>res.data)
}

const getWeather = (city) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_OPENWEATHER_API_KEY}&q=${city}&aqi=no`
    return axios.get(URL)
        .then(res=>res.data)
    
}


export default { getAll, getWeather }