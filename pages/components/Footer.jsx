import {FooterContainer, FooterContent} from './Footer.styles'
import {H2} from '../global.styles'
import {SiNasa} from 'react-icons/si'


function Footer() {
  return (
    <FooterContainer>
      < SiNasa size={"75px"} style={{color:"#306097"}}  />
      <FooterContent>
        hoola
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer