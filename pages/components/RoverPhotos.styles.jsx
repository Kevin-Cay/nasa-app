import styled from "styled-components";

export const ContinerRover = styled.section`
    margin: -1;
    width:100%;
    padding: 5rem 5rem 2rem 5rem;
    position: relative;
    height: auto;
    background-image: url('/waveNContent.svg') ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:#84b6f4;
    display: flex;
    align-items: center ;
    justify-content:space-between;
    @media screen and (max-width:600px){
        height: 1100px;
        padding: 3rem 2rem 2rem 2rem;
        flex-direction:column-reverse;
    }
    @media screen and (max-width:750px){
        height: auto;
    }
`
export const RoverDescription = styled.section`
    width: 50%;
    height:375px;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    @media screen and (max-width:600px){
        width:100%;
        height:350px;
        justify-content:space-between;
    }
`


export const GalerySection = styled.section`
    width: 40%;
    height: 70%;
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    
    @media screen and (max-width:600px){
        max-width:100%;
        width:100%;
        height:55%;
    }
`

export const GaleryContainer = styled.div`
    margin-top:15px;
    width:100%;
    height: auto;
    position: relative;
`