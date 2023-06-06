import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormAddPeople from './components/FormAddPeople'
import NumbersList from './components/NumbersList'
import phoneNumberService from './services/phoneNumber'
import countriesService from './services/countries'
import Country from './components/Country'
import Status from './components/Status'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [content, setContent] = useState();
  const [weather, setWeather] = useState(0);

  useEffect(()=>{
    console.log(process.env.REACT_APP_OPENWEATHER_API_KEY);
    countriesService.getAll()
      .then(res=>{
        console.log(res);
        setCountries(res)
      })
  },[])

  console.log(countriesService.getWeather('London').then(res=>console.log(res)));

  const handleInputChange = (e) => {
    const input = e.target.value;

    const UpdatedCountriesToShow = countries.filter((country)=>
      country.name.common.includes(input))
      
    if(UpdatedCountriesToShow.length > 10) {
      setContent('Too many countries to show')
    }  
    else if(UpdatedCountriesToShow.length === 1) {
      countriesService.getWeather(UpdatedCountriesToShow[0].capital).then(weather=>
      setContent(<>
        <div>
          {UpdatedCountriesToShow[0].name.common}
        </div>
        <div>
          {UpdatedCountriesToShow[0].name.official}
        </div>
        <div>
          {UpdatedCountriesToShow[0].flag}
        </div>
        <div>
          TEMPERATURE OF CAPITAL: {weather.current.temp_c ? weather.current.temp_c : null} Celsius
        </div>
      </>)
      )
    }
    else {
      setContent(
        UpdatedCountriesToShow.map((e)=>{
          return <Country country={e}/>
        }
        ))
    }
  }

  

  return (
    <>
      <input onChange={handleInputChange}/>
      {/* {countriesToShow.length > 10 ? 
        <div>Too many countries match the query</div>
        :
        countriesToShow.map((e)=>{
          return <div>{e.name.common}</div>
        }) */}
      <div>
        {content}  
      </div>
      
    </>
  );
}

export default App