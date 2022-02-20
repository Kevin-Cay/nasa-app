import React from 'react'
import Image from "next/image"
import {H1,H2,  P} from '../global.styles'
import { NasaContentContainer, NasaContentText, NasaContentImage } from './NasaContent.styles'

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
                This is a title
            </H1>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum amet consequatur accusantium animi illo officia nobis doloribus id atque ab cum, tempore eveniet et ex!
            </P>
        </NasaContentText>
    </NasaContentContainer>
  )
}

export default NasaContent