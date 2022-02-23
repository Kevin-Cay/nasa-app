import React, {useState, useEffect} from 'react';
import {H1, H3, P} from '../global.styles'
import { ContinerRover, GalerySection, RoverDescription } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';

function RoverPhotos() {
  const [rover, setRover] = useState("curiosity");
  const [roverInfo, setRoverInfo] = useState([]);
  let description = roverInfo.description;
  let descriptionArr = [];
  for (const key in description) {
    if (Object.hasOwnProperty.call(description, key)) {
      descriptionArr.push(description[key])
    }
  }
  const fetchRoversInfo = async () =>{
    const response = await fetch(`/api/${rover}`)
    const data = await response.json()
    setRoverInfo(data[0])
  }
  
  useEffect(()=>{
    fetchRoversInfo()
  }, [rover])
  return (
    <ContinerRover id="RoverPhotos">
      <RoverDescription>
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
            <button onClick={() =>setRover("curiosity")} value="curiosity">Curiosity</button>
            <button onClick={() =>setRover("perseverance")} value="perseverance">Perseverance</button>
        </div>
        <ResponsiveCarousel/>
      </GalerySection>
      </ContinerRover>
  );
}

export default RoverPhotos;
