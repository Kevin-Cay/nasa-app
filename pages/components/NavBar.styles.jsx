import styled from "styled-components";

export const Nav = styled.section`
    width: 100%;
    padding: 2rem 3rem;
    background: #306097;
    color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLogo = styled.div`
    color: #eee;
    display: flex;
    h1{
        font-size: 3em;
        margin: 0;
    }
`

export const NavMenu = styled.div`
    width: 450px;
    display: flex;
    justify-content:space-between;
    a{
        font-size: 1.8em;
        font-weight: 500;
    }
    a:hover{
        color: #ccc;
    }
    @media screen and (max-width:600px){
        display:none;
    }
`
