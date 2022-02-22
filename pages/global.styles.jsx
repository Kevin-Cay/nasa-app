import styled from "styled-components";


export const H1 = styled.h1`
    font-size:3.5em;
    font-weight:700;
    margin: 0;      
    @media screen and (max-width:400px){
        font-size:2.5em;
    }
`
export const H2 = styled.h2`
    font-size:2.3em;
    font-weight:500;
    color:#f4fab4;
    margin: 0;
    span{
        color:#fff;
        font-weight:500;
    }
    @media screen and (max-width:400px){
        font-size:1.6em;
    }
`

export const H3 = styled.h3`
    font-size: 1.3rem ;
    font-weight: 500;
    color:   #1b1b1b75;
    margin: 0;
    @media screen and (max-width:400px){
        font-size:1em;
    }
`

export const P = styled.p`
    font-size: 1.5rem ;
    font-weight: 400;
    color: #000000ba;
    margin: 0;
    text-align:left;
    span{
        font-weight:700;
        color:#000;
    }
    @media screen and (max-width:400px){
        font-size:1.2em;
        text-align:left;
    }
`