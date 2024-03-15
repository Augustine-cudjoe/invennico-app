
import React from 'react'
import "./slide.scss"

function Clientsslider({onClient,surroundingImages,selectedClient } ) {
  
 
  return (
    <div className='clientsslider'>
       <div className="slider-container">
         
         
          <div className="d-flex justify-content-center align-items-center slide-holder">
               {
                surroundingImages.map(client=>(
               
                    <div className='button' key={client.id}>
                    <button  className='border-0 mx-md-3'  onClick={()=>onClient(client)}>
                    <img   className='img-fluid slider-img' 
                    src={client.img}  alt='...' style={{
                      width:"100px",height:"100px",borderRadius:"50px"
                    }}/>
                    </button>
                 </div>
                   
               

                ))
               }
          </div>
        
       </div>
    </div>
  )
}

export default Clientsslider;