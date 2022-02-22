import Header from "./components/Header"
import NavBar from "./components/NavBar"
import PicOTD from "./components/PicOTD"
import RoverPhotos from "./components/RoverPhotos"
import Footer from "./components/Footer"
import NasaContent from "./components/NasaContent"

export default function Home({data}) {
  return (
    <>
      <NavBar />
      <Header />
      {/* <PicOTD picData={data} /> */}
      <NasaContent />
      <RoverPhotos />
      <Footer />
    </>
  )
}

// export async function getStaticProps(){
  
//   try{
//     const data = await res.json()
//     return{
//       props: {
//         data,
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }