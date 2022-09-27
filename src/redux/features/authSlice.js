import {createSlice} from '@reduxjs/toolkit'


const initialState={
    authenticated:false,
    user:null
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.authenticated=true
            state.user={
                name:'User',
                email:'user@mail.com'
            }
        },
        logout:(state)=>{
            state.user=null
            state.authenticated=false
        }
    }
})

export const{login,logout}=authSlice.actions
export default authSlice.reducer