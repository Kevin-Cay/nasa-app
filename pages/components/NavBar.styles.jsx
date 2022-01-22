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
        font-size: 3rem;
        margin: 0;
    }
`

export const NavMenu = styled.div`
    width: 350px;
    display: flex;
    justify-content:space-between;
    a{
        font-weight: 500;
    }
    a:hover{
        color: #ccc;
    }
`
