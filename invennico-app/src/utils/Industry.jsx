import React from 'react'

function Industry( {
    selectedContact,
    industry,
    onSelect,
    
}) {
  return (
    <div className='industry'>

          {
             industry.map(items=>(
          <div  key={items.id} className="d-flex mb-md-2 mb-3">
          <button 
               onClick={() => {
                onSelect(items);
               
             }}
          className=' btn text-start ps-md-3 industral-button'> {items.name}</button>
        </div>
                              ))
                            }
    </div>
  )
}

export default Industry;