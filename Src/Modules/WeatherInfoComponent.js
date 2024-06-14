import styled from "styled-components";


export const WeatherInfoIcons = {
    sunset: "/Images/clear.png",
    sunrise: "/Images/clear.png",
    humidity: "/Images/humidity.png",
    wind: "/Images/wind.png",
    pressure: "/Images/clouds.png",

};



const WeatherCondition= styled.div`

display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content: space-evenly;
margin:30px auto;

`;

const WeatherInfoContainer = styled.div`

display:flex;
width:90%;
flex-wrap:wrap;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
`;
const Condition= styled.span`

margin:20px auto;
font-size: 14px;

& span {
    font-size:27px;
}


`;

const WeatherLogo = styled.img`
width:100px;
height: 100px;
margin: 5px auto;
text-align:center;display:flex;
`;

const Location= styled.span`

font-size:28px;
font-weight:bold;
display:flex;
align-items:center;


`;

const WeatherInfoLabel= styled.span`
font-size:14px;
font-weight:bold;
margin:20px 25px 10px;
display:flex;
align-items:center;
width:100%;
`;

const InfoContainer = styled.div`
display:flex;
margin:5px 10px;
flex-direction:row;
justify-content:space-evenly;
align-items: center;
`;

const InfoIcon = styled.img`

width:35px;
height:36px;
`;
const InfoLabel = styled.span`

display:flex;
flex-direction:column;
font-size:14px;
margin:15px;
& span{
    font-size:12px;
    text-transform:capitalize;
}
`;
const WeatherInfoComponent = (props) =>{
    const {name,value} = props;

    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
<span> {name}  </span>
            </InfoLabel>
        </InfoContainer>
    )
};








const WeatherComponent = () => {
    return <div>
        <WeatherCondition>
            <Condition><span>30 C</span>Cloudy</Condition>
            <WeatherLogo src="/Images/clear.png" /> 
        </WeatherCondition>
        <Location>London,  GB</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>
            <WeatherInfoComponent name="sunrise" value="2332" />
            <WeatherInfoComponent name="humidity" value="432" />
            <WeatherInfoComponent name="wind" value="423" />
            <WeatherInfoComponent name="pressure" value="42432" />

        </WeatherInfoContainer>
        </div>
};
export default WeatherComponent;