import {createSlice} from '@reduxjs/toolkit'
import { data } from '../../util/data'

const initialState={
    stations:[],
    current:null
}

export const workStationSlice=createSlice({
    name:'workstation',
    initialState,
    reducers:{
        fetchAll:(state)=>{
            state.stations=data
        },
        getSelected:(state,action)=>{
            state.current=state.stations.find(item=>item.id===action.payload)
        },       
        clear:(state)=>{
            state.current=null
            state.stations=[]
        }
    }
})
export const{fetchAll,getSelected,clear}=workStationSlice.actions
export default workStationSlice.reducer