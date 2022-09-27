import React,{useState,useRef,useEffect} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from './TimePicker';
import DurationPicker from './DurationPicker';
import { addDays,getToday } from '../util/addDate';

const Schedule = ({show,setShow}) => {

  // ref used to track the clicked portion of the screen
  const overlayRef=useRef() 
  
  //closed the modal 
  const close=()=>{
    setShow(false)
  }
  const closeModal=(e)=>{
    if(e.target===overlayRef.current){
        close()
    }
  }

  // manage time
   const initialState={
    hour:10,
    min:0,   
    am_pm:'am',
    duration:30
  }

  const[formState,setFormState]=useState(initialState)
  const{hour,min,am_pm,duration}=formState

  // used to handle all inputs
  const handleChange=(e)=>{    
    const{value,name}=e.target
    setFormState({
      ...formState,[name]:value
    })
  }

  // states to manage the selected, success and error messages
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateError, setDateError] = useState("");  
  const[error,setError]=useState(false)
  const [dateSuccessMessage,setDateSuccessMessage]=useState('')
  const[status,setStatus]=useState(false)

  // handles validation of the selected date
  const validateDate=(n)=>{
    let chosendate=getToday(n)
    let fivesAhead = addDays(5);
    if (chosendate === fivesAhead) {
      setDateSuccessMessage('Chosen Date Accepted') 
      setDateError("")    
      setError(false)
    }
    else {
      setDateError("You can only book five days ahead");
      setError(true)  
      setDateSuccessMessage("")   
    }
  }
 
  // monitors the selected date for changes
  useEffect(() => {
   validateDate(selectedDate)
  }, [selectedDate]); 

  // clears all error when page loads
  useEffect(() => {
    setDateError("");   
     setError(false)
  }, []);
 

  // handles the final booking
  const handleBooking=()=>{    
    let chosendate=getToday(selectedDate)
    let today=getToday(new Date())
    if(chosendate===today){
      setDateError('* Please select a valid date')
      setError(true)
    }    
    else{
      setStatus(true)    
      setError(true)      
    }
  } 

  return (
    <div className={`w-full h-[100vh] bg-[#000000b4] fixed top-0 left-0 transition-all duration-500 ease-in-out ${show ? 'z-10' : 'z-[-10]'} flex justify-center items-start`} ref={overlayRef} onClick={closeModal}>
      <AiOutlineClose className='text-white top-0 right-6 absolute text-2xl cursor-pointer hidden md:block'  onClick={() => close()}/>

      <div className='w-[90%] md:w-[70%] h-[80vh] bg-gradient-to-r from-cyan-500 to-blue-500 mt-16 md:mt-[60px] pb-3 overflow-y-scroll relative'>
      <AiOutlineClose className='text-white top-0 z-[40] right-0 absolute text-2xl cursor-pointer block md:hidden'  onClick={() => close()}/>
        <div className='w-full flex justify-center items-center uppercase sticky top-0 z-30 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h4 className='mt-5 mb-2 font-semibold text-white'>schedule reservation</h4>
        </div>

        <div className='w-full px-3 '>
          <label htmlFor="Date" className='text-white font-semibold'>Select schedule Date </label>
        <Calendar onChange={setSelectedDate} value={selectedDate} minDate={new Date()} className='w-full'/>
        {dateError && <p className=' text-red-100 my-2'>{dateError}</p>}
        {dateSuccessMessage && <p className=' text-green-100 my-2'>{dateSuccessMessage}</p>}
        </div>

        <div className='w-full p-3 '>
          <label htmlFor="Date" className='text-white font-semibold block'>Select schedule Time </label>
          <TimePicker formState={formState} handleTime={handleChange} />
        </div>

        <div className='w-full p-3 '>
          <label htmlFor="Date" className='text-white font-semibold block'>Select schedule Duration </label>
          <DurationPicker handleChange={handleChange}/>
        </div>

     {
      status &&
      <div className='w-full py-2 bg-white text-slate-800 p-3 '>
          <h4 className='text-md uppercase font-semibold'>Booking Successfull</h4>
         <p>Date: {(getToday(selectedDate))}</p>
         <p>Time:{String(hour).padStart(2,"0")}:{String(min).padStart(2,"0")} {am_pm} </p>
         <p>Duration: {duration} Minutes</p>   
         
             
      </div>
     }


        <div className='w-full py-2 pl-3'>
               <button disabled={error} className='bg-white py-2 w-[60%] disabled:text-slate-400 hover:bg-black hover:text-white' onClick={handleBooking}>Book WorkStation</button>
      </div>
      </div> 
    </div>
  )
}

export default Schedule