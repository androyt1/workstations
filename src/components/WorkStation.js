import {GiLaptop} from 'react-icons/gi'
import { getSelected } from '../redux/features/workStationSlice'
import { useDispatch} from 'react-redux'

const WorkStation = ({workstation}) => {     
    const{id,name,reserved}=workstation

    const dispatch=useDispatch()
   

    const getWorkStationDetails=id=>{
        dispatch(getSelected(id))
    }  

  return (
    <div className='group shadow-md shadow-slate-400 bg-white border-2 hover:bg-black hover:border-slate-50 flex flex-col justify-center items-center py-3 cursor-pointer relative' onClick={()=>getWorkStationDetails(id)}>
        <GiLaptop className='text-4xl text-slate-500 group-hover:text-white'/>
        <span className='text-xs font-normal group-hover:text-white'>{name}</span>

        <span className="flex h-3 w-3 absolute top-0 right-0 mt-1 mr-1">
  <span className={`${reserved ? 'animate-ping' : ''}  absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}></span>
  <span className={`relative inline-flex rounded-full h-3 w-3 ${reserved ? 'bg-red-500':' bg-green-500'}`}></span>
</span>

<div className='absolute h-5 w-5 left-1 top-1 bg-slate-700 group-hover:bg-black flex justify-center items-center'><span className='text-slate-50 text-[8px] group-hover:text-[16px] group-hover:text-white'>{id}</span></div>
    </div>
  )
}

export default WorkStation