
import './App.css'
import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './Store/AuthSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // console.log(import.meta.env.VITE_REDUX_TOOLKIT);
  
  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
      {
        dispatch(login(userData))     //state ni value update thay 6 upar right corner ma j show kare a
      }else{
        dispatch(logout)              //state ni value update thay 6 upar right corner ma j show kare a
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading 
    ? <>
      {/* <h1>|| Shree sava || Jai Shree Ganesh || Jai Shree Ram || Jai Shree Krishna || Jai Shree Khodiyar Maa || Har Har Mahadev || Maatrudev Bhavah Pitrudev Bhavah </h1> */}
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header/>
            <main>
              <Outlet />
            </main>
            <Footer/>
          </div>
      </div>
    </>
    : null
}

export default App
