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
    @media screen and (max-width:600px){
        padding: 2.5em 2.5em 2em 2.5em ;
        flex-direction:column;
        justify-content:space-evenly;
    }
`
export const NasaContentText = styled.div`
    width:55%;
    height:45%;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    @media screen and (max-width:600px){
        width:100%;
        height:40%;
    }

`
export const NasaContentImage = styled.div`
    position:relative;
    width: 40%;
    height: 75%;
    border-radius: 5px;
    @media screen and (max-width:600px){
        width:100%;
        height: 35%;
    }
`