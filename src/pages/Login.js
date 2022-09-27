import React,{useEffect} from 'react'
import { login } from '../redux/features/authSlice'
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Login = () => { 
    const navigate=useNavigate() 
    const dispatch=useDispatch()
    const{authenticated}=useSelector(state=>state.auth)

    const loginUser=()=>{ 
        dispatch(login()) 
    } 

    useEffect(()=>{
        authenticated && navigate('/dashboard')
    },[authenticated,navigate])

  return (
   <div className='w-full h-[calc(100vh-60px)] bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full h-[calc(60vh-60px)] md:h-[calc(100vh-60px)]  flex justify-center items-center'>
                <img src="/images/cpu.svg" alt="" className='object-cover w-[80%]' />
            </div>
            <div className='w-full  h-[40vh] md:h-[calc(100vh-60px)]   flex justify-center items-start md:items-center'>
                <button className='py-2 w-[50%] shadow-md shadow-slate-700 bg-white' onClick={()=>loginUser()}>Click to Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login  