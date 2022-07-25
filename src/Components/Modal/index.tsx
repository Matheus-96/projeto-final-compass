/* eslint-disable quotes */
import styled from 'styled-components'

export default styled.div<IModal>`
    position:absolute;
    top:50%;
    left:50%;
    z-index:999;
    transform: translateX(-50%) translateY(-50%);

    background: linear-gradient(180deg,rgba(61,66,71,1) 0%,rgba(38,39,42,1) 100%);
    min-width: 240px; 
    min-height: 40%;
    padding: 2rem;
    visibility: hidden;

    opacity:0;
    transition: opacity .5s;
    ${props => props.open && 
      `
      visibility: visible;
      opacity:1;`}
};
    border-radius:10px;
    box-shadow: 4px 4px 10px 10px rgba(0, 0, 0, 0.1);
    .image-container{
      display:flex;
      justify-content:center;
      padding: 1rem 0;
    }
    .modal-image {
      filter: invert(80%);
      width: 100px;
    }
    .modal-text {
      padding: 1rem 0;
      font-size: 2rem;
      text-align:center;
    }
}}
`
interface IModal {
  open?: boolean
}