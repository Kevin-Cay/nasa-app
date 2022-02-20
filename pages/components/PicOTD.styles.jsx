import styled from "styled-components";

export const ContainerPic = styled.section`
    margin: -1;
    width:100%;
    padding: 8rem 5rem 2rem 5rem;
    height: 600px;
    background-image: url('/waveHeader.svg') ;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:#85f5ac;
    display: flex;
    align-items:center;
    justify-content:space-between;
`
export const ImageDescription = styled.div`
    width: 50%;
    height:75%;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
`

export const ImageOTD = styled.div`
    position:relative;
    width: 40%;
    height: 75%;
    border-radius: 5px;
`
