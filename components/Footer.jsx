import {FooterContainer, FooterContent} from './Footer.styles'
import {H3} from './global.styles'
import {SiNasa} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <FooterContainer>
      < SiNasa size={"75px"} style={{color:"#306097"}}  />
      <FooterContent>
        <H3>
          Created by: <span> Kevin Cay</span> 
        </H3>
        <a rel="noreferrer" target="_blank" href="https://github.com/Kevin-Cay">
          <BsGithub size={"20px"} style={{color:"#306097"}}/>
        </a>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer