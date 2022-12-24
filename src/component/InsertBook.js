import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBooks } from '../store/BookSlice';

export default function InsertBook() {

  const {isLoggedIn}=useSelector((state) => state.auth)
  //refs

  const title =useRef(null)
  const price =useRef(null)
  const description =useRef(null)

  const dispatch =useDispatch();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const data ={
      title:title.current.value,
      price:price.current.value,
      description:description.current.value
    }
    dispatch(insertBooks(data));
    
    title.current.value=null;
    price.current.value=null;
    description.current.value=null;
  
  }
  return (
    <>
    <div className='insert-container'>
        <h2>Insert Book</h2>
        <form onSubmit={handlesubmit}>
            <label>Title</label>
            <input type='text' ref={title} />
            <label>price</label>
            <input type='number'   ref={price} />
            <label>Description</label>
            <textarea  ref={description} />
            <button type='submit' disabled={!isLoggedIn}>submit</button>
        </form>
    </div>
    </>
  )
}
