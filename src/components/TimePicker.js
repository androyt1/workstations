
const TimePicker = ({handleChange}) => {    

    const getHours=()=>{
        let hours=[]
        for(let i=1;i <=12;++i){
            hours.push(i)
        }
        return hours
    }

    const getMinutes=()=>{
        let minutes=[]
        for(let i=0;i <60;++i){
            minutes.push(i)
        }
        return minutes
    }

    


  return (
    <div className='w-full md:w-[70%] grid grid-cols-3 gap-x-3'>
        <div className='w-full py-1 px-1 border-slate-200 border-[1px] flex justify-between items-center cursor-pointer'>
            <span className='text-white font-semibold'>HH </span>  
            <select name="hour" id="" className='w-[50%] md:w-[50%]' onChange={handleChange} defaultValue={10}>
               {
               getHours().map((h,i)=><option key={i} value={h} className='bg-white'>{String(h).padStart(2, '0')}</option>)
               }
            </select>
            </div>
        <div className='w-full py-1 px-1 border-slate-200 border-[1px] flex justify-between items-center cursor-pointer'>
        <span className='text-white font-semibold'>MM </span> 
        <select name="min" id="" className='w-[50%]' onChange={handleChange}>
               {
               getMinutes().map((m,i)=><option key={i} value={m} className='bg-white'>{String(m).padStart(2, '0')}</option>)
               }
            </select> 
        </div>
     
      <div className='w-[50%] py-1 px-3 border-slate-200 border-[1px] flex justify-center items-center cursor-pointer'>     
      <select name="am_pm" id=""  onChange={handleChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      </div>

      
  </div> 
  )
}

export default TimePicker