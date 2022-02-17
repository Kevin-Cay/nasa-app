import Header from "./components/Header"
import NavBar from "./components/NavBar"
import PicOTD from "./components/PicOTD"
import RoverPhotos from "./components/RoverPhotos"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <PicOTD />
      <RoverPhotos />
      <Footer />
    </>
  )
}
