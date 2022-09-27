import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import { logout } from '../redux/features/authSlice'
import { clear } from '../redux/features/workStationSlice'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate()
   const dispatch=useDispatch()
  const{authenticated,user}=useSelector(state=>state.auth) 
  
  const logoutUser=()=>{
    navigate('/')
    dispatch(clear())
    dispatch(logout()) 
  }

  return (
    <nav className='w-full flex justify-between items-center h-[60px] bg-[#000] shadow-md shadow-slate-700 px-3 md:px-5'>
        <h4 className='text-xl font-semibold cursor-pointer text-slate-50'>WorkStation Reservation</h4>
        <ul>
           {
            authenticated &&  <li className='text-xs hidden md:inline-block ml-5 font-semibold'><div className='cursor-pointer flex justify-center items-center text-slate-50'><span>{user?.email}</span><FaUserCircle className='text-2xl transition-transform duration-500 ease-in-out ml-2 hover:rotate-45 hidden md:block text-slate-50'/></div></li>  
           } 

            {
              !authenticated &&  <li className='text-xs inline-block ml-5 font-semibold'><div className='cursor-pointer flex justify-center items-center text-slate-50'><span >login</span></div></li>   
            }


            {
              authenticated &&  <li className='text-xs inline-block ml-5 font-semibold'><div className='cursor-pointer flex justify-center items-center text-slate-50'><span onClick={()=>logoutUser()}>Logout</span></div></li>   
            }        
        </ul>
    </nav>
  )
}   

export default Navbar