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

@media screen and (max-width:768px){
	font-size:6rem;
}

/* Secundária */

color: #222222;
`

const DateContainer = styled.div`
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 18px;
@media screen and (max-width:768px){
	font-size:1.25rem;
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

