import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:true,
    title:"sadads"
}

const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setTitle:(state,{payload})=>{
            state.title=payload;
        },
        setİsLoading:(state)=>state.setİsLoading
    }
})

export const {setTitle,setİsLoading}=apiSlice.actions
export default apiSlice