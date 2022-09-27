import React, { useEffect,useState } from "react";
import WorkStation from "../components/WorkStation";
import { fetchAll } from "../redux/features/workStationSlice";
import { useSelector, useDispatch } from "react-redux";
import Schedule from "../components/Schedule";

const DashBoard = () => {  
  // get all the workstations and get the selected workstation from state
  const dispatch = useDispatch();
  const { stations } = useSelector((state) => state.workstations);
  const { current } = useSelector((state) => state.workstations);

  // state defined to control modal display
  const[show,setShow]=useState(false)

  // fetch all workstations on payload
  useEffect(() => {
    dispatch(fetchAll());
  },[dispatch]); 
 
  // handles opening the modal on reservation button click
  const handleSchedule=()=>{
    setShow(true)
  }

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col-reverse  md:grid md:grid-cols-2 md:gap-5  px-3 md:px-5 md:place-content-center bg-[#000]  relative">
      <div className="w-full min-h-[50vh] shadow-md shadow-slate-500 bg-[#09B4D6]">
        <div className="w-full flex justify-center items-center py-2 font-semibold border-b-2 border-slate-200">
          <h6 className="uppercase">available WorkStations</h6>
        </div>
        <div className="w-full grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 p-3 gap-5">
          {stations?.map((item) => (
            <WorkStation key={item?.id} workstation={item} />
          ))}
        </div>
      </div>
      <div className="w-full min-h-[50vh] shadow-md shadow-slate-500 bg-gradient-to-r from-cyan-500 to-blue-500 px-3">
        <div className="w-full h-full flex flex-col justify-center items-center relative">            
          <img src="/images/cpu.svg" alt="workstation" className="object-cover w-[50%] pt-5 md:pt-0" />
         

            <div className="w-full grid grid-cols-1 ">
              <div className="w-full bg-cyan-500 p-4">
              {
            current && 
            <div  className="py-2 w-full flex justify-between items-center bg-[#000000] px-3 relative mb-2">
            <span className="text-slate-50">ID</span>
          <span className="text-slate-50">{current?.id}</span>
          </div>
          }
          <div className={`py-2 w-full flex ${current ? 'justify-between':'justify-start uppercase'} items-center bg-[#000000] px-3 relative`}>         
            <h3 className="text-md text-slate-50 font-semibold">
              {current?.name ? current.name : "Select a Work Station"}
            </h3>           
           {
            current &&  <div className="h-full flex justify-center items-center absolute right-0 top-0 ">
                <span className={`${current?.reserved ?'flex h-3 w-3':'flex h-3 w-3'} absolute right-2`}>
            <span
              className={`${
                current?.reserved ? "" : "animate-ping"
              }  absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                current?.reserved ? "bg-red-500" : "bg-green-500"
              }`}
            ></span>
          </span>
            </div>
           }
          </div>
          {
            current && 
            <div className="py-2 w-full flex justify-between items-center bg-[#000000] px-3 relative mt-2">
         <p className="text-slate-50">Desk Number:  </p>
         <span className="text-slate-50">{current?.desk_number}</span>
          </div>
          }
              </div>
              <div className="w-full bg-cyan-500 p-4">
              <div  className="py-2 w-full flex justify-start items-center bg-[#000000] px-3 relative mb-2">
            <span className="text-slate-50 uppercase">Schedule information</span>         
          </div>
          <div  className="py-2 w-full  flex justify-between items-center bg-[#000000] px-3 relative mb-2">
            <span className="text-slate-50">Date/time:</span>
            <span className="text-slate-50">{current?.schedule?.date}</span>         
          </div>
          <div  className="py-2 w-full  flex justify-between items-center bg-[#000000] px-3 relative mb-2">
            <span className="text-slate-50">Duration:</span> 
            <span className="text-slate-50">{current?.schedule?.duration} minutes</span>        
          </div>
              </div>
              
            </div>



{
            current && 
            <div className="py-2 w-[50%] flex justify-between items-center  px-3 relative mt-4">
        <button disabled={current?.reserved} className="group hover:bg-black w-full disabled:bg-slate-400 disabled:shadow-none  bg-slate-50 py-2 font-semibold  text-xs  border-2 border-slate-300"
         onClick={()=>handleSchedule()}><span className="group-hover:text-white">{current?.reserved ? 'WorkStation Booked':'WorkStation Available'}</span></button>
          </div>
          }
        </div>
      </div>
      <Schedule show={show} setShow={setShow} />
    </div>
  );
};

export default DashBoard;
