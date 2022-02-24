import React, {useState, useEffect} from 'react';
import {H1, H3, P, SubTitle} from '../global.styles'
import { ContinerRover, GalerySection, RoverDescription } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';

function RoverPhotos({dataCuriosity, dataPerseverance}) {
  const [rover, setRover] = useState("curiosity");
  const [roverInfo, setRoverInfo] = useState([]);
  const [roverGalery, setRoverGalery] = useState(dataCuriosity.photos);


  const fetchRoversInfo = async () =>{
    const response = await fetch(`/api/${rover}`)
    const data = await response.json()
    setRoverInfo(data[0])
  }

  let description = roverInfo.description;
  let descriptionArr = [];
  for (const key in description) {
    if (Object.hasOwnProperty.call(description, key)) {
      descriptionArr.push(description[key])
    }
  }
  useEffect(()=>{
    fetchRoversInfo()
  }, [rover])
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
            <button onClick={() =>(setRover("curiosity"), setRoverGalery(dataCuriosity.photos))} value="curiosity">Curiosity</button>
            <button onClick={() =>(setRover("perseverance", setRoverGalery(dataPerseverance.latest_photos)))} value="perseverance">Perseverance</button>
        </div>
        <ResponsiveCarousel rover={rover} roverGalery={roverGalery} />
      </GalerySection>
      </ContinerRover>
  );
}

export default RoverPhotos;
