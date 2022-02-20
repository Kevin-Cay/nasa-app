import styled from "styled-components";

export const ContainerHeader = styled.section`
    margin-top:-1;
    width: 100%;
    height: 500px;
    padding: 0 5rem;
    background-image: url('/waveNav.svg') ;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    justify-content:space-between;
    align-items:center;

    @media screen and (max-width:600px){
    padding: 0 2.5rem;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    }
`
export const HeaderImage = styled.div`
    position:relative;
    width: 35%;
    height: 75%;
    @media screen and (max-width:600px){
        height: 35%;
    }
`
