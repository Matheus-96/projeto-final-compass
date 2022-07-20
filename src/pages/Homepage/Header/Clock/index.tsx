import { format } from 'date-fns'
import { useState } from 'react'
import styled from 'styled-components'
import calendario from './calendario.json'

const ClockContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const TimeContainer = styled.div`
font-style: normal;
font-weight: 700;
font-size: 9rem;
line-height: 8rem;
text-align: center;

@media screen and (max-width:768px) and (min-width: 500px){
	font-size:8rem;
}

@media screen and (max-width:499px){
	font-size:5rem;
	line-height: 4rem;


}

/* Secundária */

color: #222222;
`

const DateContainer = styled.div`
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 18px;
@media screen and (max-width:768px) and (min-width: 500px){
	font-size:1.75rem;
}

`
export default function Clock(){
    const [date, setDate] = useState(new Date())
    setInterval(()=> {
        setDate(new Date())
    }, 30000)
    return(
        <ClockContainer>
            <TimeContainer>
                <span>{format(date, 'HH')}</span>
                <span>:</span>
                <span>{format(date, 'mm')}</span>
            </TimeContainer>
            <DateContainer>
                <span>{calendario.diaSemana[date.getDay()]}, {date.getDate()} de {calendario.meses[date.getMonth()]} de {date.getFullYear()}</span>
            </DateContainer>
        </ClockContainer>
    )
}

