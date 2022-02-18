import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GaleryContainer } from './RoverPhotos.styles';
function ResponsiveCarousel() {
    return (
        <GaleryContainer>

        <Carousel>
            <div>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="./sky.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </GaleryContainer>
    );
}

export default ResponsiveCarousel

