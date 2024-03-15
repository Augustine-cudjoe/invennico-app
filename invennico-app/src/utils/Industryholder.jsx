
import React from 'react'


function Industryholder({items}) {
   
  return (
    <div className='industryholder'>
         <div className="row g-2">
         <div className='col-md-3'>
         <h1> {items.name}</h1>
         </div>
           <div className="col-md-9">
           <div className="industry-button-holder  ms-md-5 ">
          <a className=' btn ps-md-5 fs-5 project-right-button text-center' href='#'>Explore More Projects  
           <span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
            className="ms-md-3 ms-2 bi bi-arrow-right" viewBox="0 0 16 16">
           <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg></span>
           </a>
       </div>
           </div>
         </div>
       <p>Content for Option <span> {items.id}</span> Lorem ipsum dolor sit amet, consectetuer adipiscing 
         <br/> elitsed diam nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
        
    </div>
  )
}

export default Industryholder;