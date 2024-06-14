import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css';






const API_key = "7682ac68366c23e9a9928c881ae4907f";
const Container =styled.div`
display:flex;
flex-direction: column;
margin:auto;
align-items: center;
box-shadow: 0 3px 6px 0 #666;
padding:20px 10px;
border-radius:4px;
width:375px;
background: white;
font-family: Montserrat;
`;

const CityComponent = styled.div`
display:flex;
flex-direction: column;
`;

const Applabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

const WeatherComponent = styled.div`
display:flex;
flex-direction: column;
`;



function App() {
  const [city, updateCity] = useState();
  const[weather, updateWeather] = useState();

  const fetchWeather = async () => {
  const response= 
       await  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key});
       console.response(response)
`)
  };
  return (
    <Container>
    <Applabel>React Weather App</Applabel>
    
    <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      
    
    </Container>
  );
}

export default App;
