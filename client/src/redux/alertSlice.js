import {createSlice} from '@reduxjs/toolkit'

export const alertSlice = createSlice({
    name:"alerts",
    initialState:{
        loading:false
    },
    reducers:{
        showloader:(state)=>{
            state.loading=true
        },
        hideloader:(state)=>{
            state.loading=false
        }
    } 
}
)

export const {showloader,hideloader} = alertSlice.actions;