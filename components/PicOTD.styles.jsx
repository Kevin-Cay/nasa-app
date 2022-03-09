import styled from "styled-components";

export const ContainerPic = styled.section`
    margin: -1;
    width:100%;
    padding: 8rem 5rem 2rem 5rem;
    height: auto;
    background-image: url('/waveHeader.svg') ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:#85f5ac;
    display: flex;
    align-items:center;
    justify-content:space-between;
    @media screen and (max-width:600px){
        height: 825px;
        display: flex;
        padding: 4.5rem 2rem 2rem 2rem;
        flex-direction: column-reverse;
        justify-content:space-evenly;
    }
`
export const ImageDescription = styled.div`
    margin:4em 0 2em 0;
    width: 50%;
    height:auto;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    @media screen and (max-width:600px){
        margin:2em 0 2em 0;
        width:100%;
        height: 60%;
    }
`

export const ImageOTD = styled.div`
    position:relative;
    width: 40%;
    height: 400px;
    border-radius: 5px;
    @media screen and (max-width:600px){
        margin-top:2em;
        width:100%;
        height: 40%;
    }
`
