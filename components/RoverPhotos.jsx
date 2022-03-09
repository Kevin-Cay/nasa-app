import React, {useState, useEffect, useCallback} from 'react';
import {H1, H3, P, SubTitle} from './global.styles'
import { ContinerRover, GalerySection, RoverDescription } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';

function RoverPhotos({dataCuriosity, dataPerseverance}) {
  const [rover, setRover] = useState("curiosity");
  const [roverInfo, setRoverInfo] = useState(curiosityRover[0]);
  const [roverGalery, setRoverGalery] = useState(dataCuriosity.latest_photos);

  // const fetchRoversInfo = async () =>{
  //   const response = await fetch(`/api/${rover}`)
  //   const data = await response.json()
  //   setRoverInfo(data[0])
  // }


  let description = roverInfo.description;
  let descriptionArr = [];
  for (const key in description) {
    if (Object.hasOwnProperty.call(description, key)) {
      descriptionArr.push(description[key])
    }
  }

  const handleChange = (roverName ) =>{
    setRover(roverName)  
    if(roverName == "curiosity"){
      setRoverGalery(dataCuriosity.latest_photos)
      setRoverInfo(curiosityRover[0])
    }else{
      setRoverGalery(dataPerseverance.latest_photos)
      setRoverInfo(perseveranceRover[0])
    }

  }
  
  // useCallback

  useEffect(()=>{
    // fetchRoversInfo()
  })
  return (
    <ContinerRover id="RoverPhotos">
      <RoverDescription>
        <SubTitle>Rover Photo Gallery</SubTitle>
        <H1>
        {roverInfo.title}
        </H1>
        {     descriptionArr.map((x, i) => <P key={i}>{x}</P> )
        }
        <H3>
        {roverInfo.footer}
        </H3>
      </RoverDescription>
      <GalerySection>
        <div className="multi-button">
            <button onClick={() =>(handleChange('curiosity'))} value="curiosity">Curiosity</button>
            <button onClick={() =>(handleChange('perseverance'))} value="perseverance">Perseverance</button>
        </div>
        <ResponsiveCarousel rover={rover} roverGalery={roverGalery} />
      </GalerySection>
      </ContinerRover>
  );
}

export default RoverPhotos;
const curiosityRover = [{
  id: 1,
  name: "curiosity",
  title: "Curiosity Rover",
  description: {
      0: "Also called Mars Science Laboratory(MSL), U.S. robotic vehicle, designed to explore the surface of Mars, which determined that Mars was once capable of dupporting life.",
      1: "The rover was launched by an Atlas V rocket from Cape Canaveral, Florida, on November 26, 2011, and landed in Gale crater on Mars on August 6, 2012.",
      2: "This is a gallery of the latest images of Mars taken on Curiosity's"
  },
  footer: "Curiosity is about 3 metres long and weighs about 900 kg. ",
}]
const perseveranceRover = [{
  id: 2,
  name: "perseverance",
  title: "Perseverance Rover",
  description: {
      0: "Nicknamed Percy, is a car-sized Mars rover designed to explore the crater Jezero on Mars as part of NASA’s Mars 2020 mission. The rover was launched on 30 July 2020, and landed on 18 February 2021.",
      1: " Percy is looking for signs of microscopic life using PIXL, a camera mounted to its robotic arm that can see features as small as a grain of salt. ",
      2: "This is a gallery of the latest images of Mars taken on Perseverance's"
  },
  footer: "Perseverance is about 2,7 metres long and weighs about 1,025 kg. "
}]
