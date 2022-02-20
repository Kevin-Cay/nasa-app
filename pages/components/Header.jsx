import { ContainerHeader, HeaderImage } from "./Header.styles"
import { H1, H2 } from "../global.styles"
import Image from "next/image"

function Header() {
    return (
        <ContainerHeader id='header' >
            <HeaderImage>
                <Image 
                src={'/space_rocket-3.svg'} alt='space_rocket'  layout='fill'
                objectFit='contain'
                />
            </HeaderImage>
            <div>
                <H1>Hi there!</H1>
                <H2>
                    Here you can find a lot of 
                    information about NASA
                    </H2>
            </div>
        </ContainerHeader>
    )
}

export default Header
