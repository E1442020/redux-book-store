import React, { Fragment } from 'react'

export default function BookList({isLoading,books,isLoggedIn,dispatch,deleteBooks,getBookId}) {
  const bookList =
 books.length>0 ?
  books.map(book =>{
    return(<Fragment key={book.id}>

    <div className='display'>
      <p>{book.title}</p>
      <div>
          <button className='read' onClick={()=>getBookId(book.id)}>Read</button>
          <button className='delete' disabled={!isLoggedIn} onClick={()=>dispatch(deleteBooks(book.id))}>Delete</button>
      </div>
      </div>
      </Fragment>
    )
    
  }) :'there is no books'
  return (
    <>
    <div className='booklist-container'>
        <h2>Books List</h2>
        {isLoading ? 'loading...' :
        <div className='list'>
          {bookList}
       
    </div>}
        
    </div>
    </>
  )
}
