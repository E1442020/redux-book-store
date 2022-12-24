import React from 'react'

export default function BookDetails({info}) {
  return (
   <>
   <div className='bookdetails-container'>
    <h2>Book Details</h2>
    <div className='bookdetails-content'>
    {info ? (
      <div>
        <p>Title: {info.title}</p>
        <p>Description: {info.description}</p>
        <p>Inserted BY: {info.userName}</p>
        <p>Price: {info.price}</p>

      </div>
    ):(<div>
      <p>there is no book selected yet, please select!</p>
  </div>)}
  </div>
    
   </div>
   
   </>
  )
}
