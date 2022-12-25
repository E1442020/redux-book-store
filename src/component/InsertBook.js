import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBooks } from '../store/BookSlice';

export default function InsertBook() {
  const [titleBook,setTitleBook]=useState('');
  const [priceBook,setPriceBook]=useState('');
  const [desBook,setDesBook]=useState('');
  const [error,setError]=useState(false);
  // const [log,setLog]=useState(false);


  const {isLoggedIn}=useSelector((state) => state.auth)
  //refs

  const title =useRef(null)
  const price =useRef(null)
  const description =useRef(null)

  const dispatch =useDispatch();

  const handlesubmit=(e)=>{
    e.preventDefault();
    // if(isLoggedIn===true){
    //   setLog(true);
      

    
    if(title.current.value.length<=0||price.current.value.length<=0||description.current.value.length<=0){
      setError(true)
     

    }else{

    const data ={
      title:title.current.value,
      price:price.current.value,
      description:description.current.value
    }
    dispatch(insertBooks(data));
    
    title.current.value='';
    price.current.value='';
    description.current.value='';
  
  }}
  return (
    <>
    <div className='insert-container'>
      {!isLoggedIn?
      <div className='hint'>
        <p>please login in first</p>
        </div>:""}
        <h2>Insert Book</h2>
        <form onSubmit={handlesubmit}>
            <label>Title</label>
            <input type='text' ref={title} onChange={(e)=>setTitleBook(e.target.value)} />
            {(error && titleBook.length<=0)?
            <label className='color'>title cant be empty</label>:"" }
            
            <label>price</label>
            <input type='number'   ref={price} onChange={(e)=>setPriceBook(e.target.value)} />
            {(error && priceBook.length<=0)?
            <label  className='color'>price cant be empty</label>:""}
            
             <label>Description</label>
            <textarea  ref={description} onChange={(e)=>setDesBook(e.target.value)} />
            {(error&& desBook.length<=0)?
            <label  className='color'>description cant be empty</label>:""}
            
             <button type='submit' disabled={!isLoggedIn}>submit</button>
        </form>
    </div>
    </>
  )
}
