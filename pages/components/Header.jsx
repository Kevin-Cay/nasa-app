import { ContainerHeader } from "./Header.styles"
import { H1, H2 } from "../global.styles"
import Image from "next/image"

function Header() {
    return (
        <ContainerHeader id='header' >
            <Image 
            src={'/space_rocket-3.svg'} alt="space_rocket" 
            width={400} 
            height={400} 
            />
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
