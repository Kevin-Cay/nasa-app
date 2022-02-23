import React from 'react'
import Image from "next/image"
import {H1,H2,  P} from '../global.styles'
import { NasaContentContainer, NasaContentText, NasaContentImage, Rotate } from './NasaContent.styles'

function NasaContent() {
  return (
    <NasaContentContainer>
        <NasaContentImage>
            <Image 
            src={'/saturn.svg'} alt='saturn_image'  layout='fill'
            objectFit='contain'
            />
        </NasaContentImage>
        <NasaContentText>
            <H1>
                About NASA
            </H1>
            <P>
                The <span>National Aeronautics and Space Administration</span> established in 1958 for the research and development of vehicles and activities for the exploration of space within and outside Eart’s atmosphere.
            </P>
        </NasaContentText>
    </NasaContentContainer>
  )
}

export default NasaContent