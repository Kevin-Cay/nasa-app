import Header from "../components/Header"
import NavBar from "../components/NavBar"
// import PicOTD from "../components/PicOTD"
import RoverPhotos from "../components/RoverPhotos"
import Footer from "../components/Footer"
import NasaContent from "../components/NasaContent"
import { H1,  H3, P, SubTitle } from '../components/global.styles';
import {ContainerPic, ImageDescription, ImageOTD} from '../components/PicOTD.styles'
import Image from 'next/image';


const defaultData ={
  title:"error",
  date: '01-01-1991' ,
  url: '/sky.jpg' ,
  explanation:'error'
}



const defaultDataRover ={
  latest_photos: [
  {
  id: 944945,
  sol: 371,
  camera: {
  id: 38,
  name: "error",
  rover_id: 8,
  full_name: "Error"
  },
  img_src: "/error-api.png",
  earth_date: "2022-03-06",
  rover: {
  id: 8,
  name: "Perseverance",
  landing_date: "2021-02-18",
  launch_date: "2020-07-30",
  status: "fail"
  }
  }]
  
  }

export default function Home({data , 
                              dataCuriosity = defaultDataRover, 
                              dataPerseverance =defaultDataRover,}) {

  return (
    <>
      <NavBar />
      <Header />
      <PicOTD picData={data} />
      <NasaContent />
      <RoverPhotos 
      dataCuriosity={dataCuriosity} 
      dataPerseverance={dataPerseverance}
       />
      <Footer />
    </>
  )
}

export async function getStaticProps(){
  try{
    const apiKey = process.env.REACT_APP_NASA_APIKEY
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const data = await res.json()
//     const resCuriosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&page=1&api_key=${apiKey}`)
//     const dataCuriosity = await resCuriosity.json() 
//     const resPerseverance = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?&page=1&api_key=${apiKey}`)
//     const dataPerseverance = await resPerseverance.json()
    return{
      props: {
        data,
        // dataCuriosity : dataCuriosity,
        // dataPerseverance: dataPerseverance,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error)
  }
}

export function PicOTD({picData = defaultData}) {
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
                objectFit='contain' />
          </ImageOTD>
        </ContainerPic>
   )
}