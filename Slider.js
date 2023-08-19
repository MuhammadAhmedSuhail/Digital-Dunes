import React from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" style={{height:"300px"}}>
        <div className="carousel-item active">
        <img src={one} className='my-image1' style={{objectFit:"contain !important"}}/>
        </div>
        <div className="carousel-item">
        <img src={two} className='my-image2' style={{objectFit:"contain"}}/>
        </div>
        <div className="carousel-item">
        <img src={three} className='my-image3' style={{objectFit:"contain"}}/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  );
}

export default Slider