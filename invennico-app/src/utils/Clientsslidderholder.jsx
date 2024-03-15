import React from 'react'
import Slider from "react-slick";
import "./slide.scss"

  function Clientsslidderholder({client}) {
    const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
  return (
      <div className='clientsslidderholder'>
       
          <Slider {...settings} >
          <div className="slider-container d-flex justify-content-center">
            <div className="card  h-50 w-50  " key={client.id}  >
            <div className="card-body">
              <p className='text-center mt-md-5'>{client.text} </p>
            <div  className='d-flex justify-content-center align-items-center mb-md-5'>
              <div>
              <img src={client.img} alt="..."
               style={{width:"50px",height:"50px",borderRadius:"50px"}} className='img-fluid me-2' />

              </div>
              <div className='ms-md-3'>
               <h6 className='mb-md-0 pb-md-0'> {client.name}</h6>
               <p className=''>{client.job}</p>
             </div>
          </div>
            </div>
           </div>
           </div>
          </Slider>
         
      
    </div>
  )
}

export default Clientsslidderholder;