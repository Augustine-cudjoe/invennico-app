import React from 'react'
import Slider from "react-slick";

function Sliderclient({myimg}) {
    
    
  return (
    <div className='sliderclient'>
       <div className="slider-container">
        <Slider {...settings}>
            {
            clientImg.map(myimg=>(
              <div>
                <img key={myimg.id} 
                src={myimg.img}
                 
                />
              </div>  
            ))
            }
        </Slider>
       </div>
    </div>
  )
}

export default Sliderclient;