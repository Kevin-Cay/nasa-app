import { Nav, NavLogo, NavMenu } from "./NavBar.styles"

function NavBar() {
    return (
        <Nav>
            <NavLogo>
                <h1>NS</h1>
            </NavLogo>
            <NavMenu>
                <a href="#POTD">Pic Of The Day</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </NavMenu>
        </Nav>
    )
}

export default NavBar
