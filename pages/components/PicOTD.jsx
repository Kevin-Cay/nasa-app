import { H1, H3 } from '../global.styles';
import {ContainerPic, ImageOTD} from './PicOTD.styles'
import Image from 'next/image';

function PicOTD() {
  return (
  <ContainerPic id="POTD" >
      <H1>Hola mundo desde acá</H1>
      <ImageOTD>
        <Image src='/sky.jpg' alt='image' width={400} height={275} />
        <H3>
        This is the image card 
        </H3>
      </ImageOTD>
  </ContainerPic>)
}

export default PicOTD;
