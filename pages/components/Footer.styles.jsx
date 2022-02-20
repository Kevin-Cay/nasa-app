import styled from "styled-components";


export const FooterContainer = styled.div`
    width:100%;
    height:100px;
    padding: 0 5rem;
    display:flex;
    align-items:center;
    justify-content: inline-block;
    @media screen and (max-width:600px){
        padding: 0 2.5rem;
    }
`
export const FooterContent = styled.div`
    width: auto;
    height: 80%;
    margin-left:5em;
    display: flex;
    align-items:center;
    @media screen and (max-width:600px){
        width:50%;
    }
`