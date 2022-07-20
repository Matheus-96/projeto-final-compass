import { UsuarioContext } from 'common/context/Usuario'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const RefreshContainer = styled.div`
  display: flex;
  min-width: 230px;
  justify-content:space-around;
  align-items:center;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;

    color: #FFFFFF;
  }
`

const Timer = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    color: #FFFFFF;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: right;

    color: #FFFFFF;
  }
`

export default function Refresh(){
    const navigate = useNavigate()
    const {getTimer} = useContext(UsuarioContext)
    const [localTimer, setLocalTimer] = useState(getTimer())
    if(localTimer <= 0) navigate('/')
    setTimeout(()=>{setLocalTimer(localTimer - 1)}, 1000)

    return(
        <RefreshContainer>
            <h3>
              Application<br />
              refresh in
            </h3>
            <Timer>
                <h2>
                    {localTimer}
                </h2>
                <span>
                  seconds
                </span>

            </Timer>

        </RefreshContainer>
    )
}