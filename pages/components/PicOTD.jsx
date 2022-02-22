import { H1, H3, P } from '../global.styles';
import {ContainerPic, ImageDescription, ImageOTD} from './PicOTD.styles'
import Image from 'next/image';


function PicOTD({picData}) {
  let content = picData.explanation
  let newContent = content.split(".")
  let dataContent
  if(newContent.length >=4){
    dataContent = newContent.slice(0, 4).join(".")
  }
  console.log(dataContent.length)
  return (
  <ContainerPic id="POTD" >
      <ImageDescription>  
      <H1>{picData.title}</H1>
      <P>{dataContent}
      </P>
      <H3>
       - {picData.date} - 
      </H3>
      </ImageDescription>
      <ImageOTD>
        <Image src={picData.url} alt='image'  layout='fill'
    objectFit='contain' />
      </ImageOTD>
  </ContainerPic>)
}

export default PicOTD;


