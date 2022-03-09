

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import PicOTD from "../components/PicOTD"
import RoverPhotos from "../components/RoverPhotos"
import Footer from "../components/Footer"
import NasaContent from "../components/NasaContent"



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
    const resCuriosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&page=1&api_key=${apiKey}`)
    const dataCuriosity = await resCuriosity.json() 
    const resPerseverance = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?&page=1&api_key=${apiKey}`)
    const dataPerseverance = await resPerseverance.json()
    return{
      props: {
        data,
        dataCuriosity : dataCuriosity,
        dataPerseverance: dataPerseverance,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error)
  }


}
