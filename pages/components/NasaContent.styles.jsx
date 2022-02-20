import styled from 'styled-components'


export const NasaContentContainer = styled.section`
    width: 100%;
    height: 600px;
    padding: 5em 5em 2em 5em ;
    background-image: url('/wavePOTD.svg') ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:#f4fab4;
    display: flex;
    align-items:center;
    justify-content:space-between;
`
export const NasaContentText = styled.div`
    width:60%;
    height:45%;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;

`