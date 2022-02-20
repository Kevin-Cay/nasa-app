import React from 'react';
import {H1, H3, P} from '../global.styles'
import { ContinerRover, GalerySection, RoverDescription } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';

function RoverPhotos() {
  return (
    <ContinerRover>
      <RoverDescription>
        <H1>
        This is the Rovers Name
        </H1>
        <P>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quis quas eum est ducimus recusandae natus magni quos saepe blanditiis doloremque sequi deleniti accusamus labore eius mollitia non sapiente minus corrupti nemo dolor, ad incidunt?
        </P>
        <H3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quisquam!
        </H3>
      </RoverDescription>
      <GalerySection>
        <div className="multi-button">
            <button>Cut</button>
            <button>Copy</button>
            <button>Copy</button>
        </div>
        <ResponsiveCarousel/>
      </GalerySection>
      </ContinerRover>
  );
}

export default RoverPhotos;
