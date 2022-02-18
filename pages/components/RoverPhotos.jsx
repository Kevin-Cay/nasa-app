import React from 'react';
import { ContinerRover } from './RoverPhotos.styles'
import ResponsiveCarousel from './ResponsiveCarousel';

function RoverPhotos() {
  return (
    <ContinerRover>
        <div className="multi-button">
            <button>Cut</button>
            <button>Copy</button>
            <button>Paste</button>
            <button>Paste</button>
        </div>
        <ResponsiveCarousel></ResponsiveCarousel>
      </ContinerRover>
  );
}

export default RoverPhotos;
