import { H1,  H3, P, SubTitle } from '../components/global.styles';
import {ContainerPic, ImageDescription, ImageOTD} from '../components/PicOTD.styles'
import Image from 'next/image';


const defaultData ={
  title:"error",
  date: '01-01-1991' ,
  url: '/sky.jpg' ,
  explanation:'error'
}

function PicOTD({picData}) {
    let dataContent = 'error' 
      let content = picData.explanation
      let newContent = content.split(".")
      if(newContent.length >=4){
        dataContent = newContent.slice(0, 4).join(".").concat("...")
      }else{
        dataContent = newContent.join('.')
      }


  return (
  <ContainerPic id="POTD" >
      <ImageDescription>  
        <SubTitle>Pic Of The Day</SubTitle>
        <H1>{picData.title}</H1>
        <P>{dataContent}
        </P>
          <H3>
          - {picData.date} - 
          </H3>
      </ImageDescription>
          <ImageOTD>
            <Image src={picData.url} alt='image'  layout='fill'
                objectFit='contain' priority />
          </ImageOTD>
        </ContainerPic>
   )
}

export default PicOTD;




