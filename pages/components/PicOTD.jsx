import { H1, H3, P } from '../global.styles';
import {ContainerPic, ImageDescription, ImageOTD} from './PicOTD.styles'
import Image from 'next/image';


function PicOTD() {
  return (
  <ContainerPic id="POTD" >
      <ImageDescription>  
      <H1>This is the title </H1>
      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptas neque consequatur mollitia praesentium itaque numquam sapiente, perspiciatis veritatis non cumque dignissimos odit obcaecati vitae animi voluptatem, illo consectetur? Pariatur vel nostrum corporis rerum voluptatibus!
      </P>
      <H3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate ratione quae est ex ullam.
      </H3>
      </ImageDescription>
      <ImageOTD>
        <Image src='/sky.jpg' alt='image'  layout='fill'
    objectFit='contain' />
      </ImageOTD>
  </ContainerPic>)
}

export default PicOTD;
