import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBooks, getBooks } from '../store/BookSlice'
import BookDetails from './BookDetails'
import BookList from './BookList'

export default function ListDetals() {
    const [selected,setSelected]=useState(null)
    const {isLoggedIn}=useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const {isLoading,books} =useSelector((state)=>state.books)
    useEffect( () => {
            dispatch(getBooks())}
    ,[])

    const getBookId=(id)=>{
        const selectedBook= books.find(book => book.id===id);
        setSelected((prev)=>{
            return{...prev,...selectedBook}
        })

    }
    return (
        <div className='ListDetals-container'>
        <BookList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} deleteBooks={deleteBooks} dispatch={dispatch} getBookId={getBookId}/>
            <BookDetails info ={selected}/>
            </div>
       
    )
}
