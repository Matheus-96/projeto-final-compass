import styled from 'styled-components'
import {ReactComponent as WeatherIcon} from 'assets/weather-cloudy.svg'
import { useEffect } from 'react'
import { useState } from 'react'
const WeatherContainer = styled.div`
width: 15%;
display: flex;
flex-direction:column;
.align-right {
  align-self:end;
}
`
const LocationContainer = styled.div`
display: flex;
align-items: center;
justify-content:center;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
`
const TemperatureContainer = styled.div`
display: flex;
align-items: center;
justify-content:center;

  .icon{
    width: 34px;
    height: 34px; 
    margin-right: 0.75rem;
    svg{
      width:100%;
      height: 100%;
    }
  }

  h3{
    font-weight: 700;
    font-size: 3rem;
  }
`
// https://api.hgbrasil.com/weather?format=json-cors&woeid=456473&key=b4613b35 RIO NEGRO


export default function Weather(){
    const [weather, setWeather] = useState<Weather>()
    
    async function GrantedGeolocation(position: GeolocationPosition){
        // eslint-disable-next-line quotes
        const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=89f375e8`, {
            mode: 'cors',
            headers: {'Content-Type': 'Application/Json'}
        })
        const json = await request.json()
        setWeather(json)
    }
    async function DeniedGeolocation() {
        const request = await fetch('https://api.hgbrasil.com/weather?format=json-cors&key=89f375e8', {
            mode: 'cors',
            headers: { 'Content-Type': 'Application/Json' }
        })
        const json = await request.json()
        setWeather(json)
    }

    useEffect(()=>{
      
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position) => {
                await GrantedGeolocation(position)
            },async ()=> {
                await DeniedGeolocation()
            })
        }
    },[])

    return(
        <WeatherContainer>
            <div className="align-right">
                <LocationContainer>
                    <h2>{weather ? `${weather.results.city.split(',')[0]} - ${weather?.results.city.split(',')[1]}` : 'Buscando...'}</h2>
                </LocationContainer>
                <div>
                    <TemperatureContainer>
                        <div className="icon">
                            <WeatherIcon />
                        </div>
                        <h3>{JSON.stringify(weather?.results.temp) || 0}°</h3>
                    </TemperatureContainer>
                </div>
            </div>
        </WeatherContainer>
    )
}

interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}

interface Results {
  temp: number;
  date: string;
  time: string;
  condition_code: string;
  description: string;
  currently: string;
  cid: string;
  city: string;
  img_id: string;
  humidity: number;
  wind_speedy: string;
  sunrise: string;
  sunset: string;
  condition_slug: string;
  city_name: string;
  forecast: Forecast[];
}

interface Weather {
  by: string;
  valid_key: boolean;
  results: Results;
  execution_time: number;
  from_cache: boolean;
}

