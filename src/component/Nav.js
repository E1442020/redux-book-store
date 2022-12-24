import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from '../store/authSlice';

export default function Nav() {
    const dispatch = useDispatch();
    const {isLoggedIn}=useSelector((state)=>state.auth)
  
  return (
    <>
    <div className='nav-container'>
        <h3>book store</h3>
        <button onClick={()=>dispatch(logInOut())}>{isLoggedIn ?'log out' : 'login'}</button>
    </div>
    </>
  )
}
