import styled from "styled-components";


export const FooterContainer = styled.div`
    width:100%;
    height:100px;
    padding: 0 5rem;
    display:flex;
    align-items:center;
    justify-content: center;
    @media screen and (max-width:600px){
        padding: 0 2rem;
    }
`
export const FooterContent = styled.div`
    margin-left:20px;
    width: 225px;
    height: 80%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    @media screen and (max-width:600px){
        width:60%;
    }
`