import styled from "styled-components";


const WeatherLogo = styled.img`
width:140px;
height: 140px;
margin: 40px auto;
text-align:center;display:flex;
`;

const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin: 10px auto;

`;

const SearchBox = styled.form`
display:flex;
flex-direction: row;
border:black solid 1px;
border-radius: 2px;
color:black;
font-size:18px;
font-weight:bold;
margin: 20px auto;
& input{
    padding:10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight:bold;
    width:250px;
}

& button{
    padding:10px;
    font-size: 14px;
    color: green;
    background-color: black;
    border: none;
    outline: none;
    font-weight:bold;
    cursor:pointer;
}






`;

const CityComponent = (props) =>{
    const {updateCity, fetchWeather} = props;
    return (
<div>
    <WeatherLogo src="/Images/clear.png"  />
    <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
    <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
    </SearchBox>
</div>

        );
};
export default CityComponent;