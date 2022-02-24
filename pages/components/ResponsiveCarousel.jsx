import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GaleryContainer } from './RoverPhotos.styles';
function ResponsiveCarousel({rover, roverGalery}) {
    
    let arr_img = roverGalery.map(x => x.img_src)
    let arr_full_name = roverGalery.map(x => x.camera.full_name)
    


    return (
        <GaleryContainer>

        <Carousel autoPlay={true} dynamicHeight={true}  infiniteLoop={true} thumbWidth={40} interval={5000} >
                
        {
            arr_img.map((element, i) => (
                 <div key={element} >
                <img src={element} />
                <p className="legend">Camera: {arr_full_name[i]}</p>
                </div>) )  
        }
            
        </Carousel>
        </GaleryContainer>
    );
}

export default ResponsiveCarousel

