import React from 'react'
import { useDispatch } from 'react-redux';

import {logout} from '../../Store/AuthSlice'
import authService from '../../appwrite/auth';


function LogoutBtn() {
    const dispath = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{   //  aa logout appwrite mathi session delete kare    //  service ma j functijon/method banavi hoy a always promise return kare promise ne handle karva mate .then or .catch lagavupde
            dispath(logout())             //  aa log out store ma state ma aapde user ni status value true mathi false kare    -->  Because Store/State ma kai pan change karvo hoy to a useSelect/useDispatch thi j thay reducer no use kari ne
        }) 
    }   
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
