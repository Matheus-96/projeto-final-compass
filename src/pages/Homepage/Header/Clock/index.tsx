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
line-height: 11rem;
text-align: center;

/* Secundária */

color: #222222;
`

const DateContainer = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
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

