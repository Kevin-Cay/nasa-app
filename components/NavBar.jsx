import { Nav, NavLogo, NavMenu } from "./NavBar.styles"
import {SiNasa} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


function NavBar() {
    return (
        <Nav>
            <NavLogo>
                <a href="">
                    <SiNasa size={"108px"} />
                </a>
            </NavLogo>
            <NavMenu>
                <a href="#POTD">Pic Of The Day</a>
                <a href="#RoverPhotos">Rover Photos</a>
                <a rel="noreferrer" target="_blank" href="https://github.com/Kevin-Cay/nasa-app.git">
                    <BsGithub size="1.2em" />
                </a>
            </NavMenu>
        </Nav>
    )
}

export default NavBar
