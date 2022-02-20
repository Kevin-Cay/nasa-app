import React from 'react'
import Image from "next/image"
import {H1,H2,  P} from '../global.styles'
import { NasaContentContainer, NasaContentText } from './NasaContent.styles'

function NasaContent() {
  return (
    <NasaContentContainer>
        <Image 
            src={'/saturn.svg'} alt="space_rocket" 
            width={400} 
            height={400} 
            />
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