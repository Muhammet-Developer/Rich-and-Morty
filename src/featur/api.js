import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    charactersData:[]
}

const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setCharactersData:(state,{payload})=>{
            state.charactersData=payload;
        },
        setİsLoading:(state)=>state.setİsLoading
    }
})

export const {setCharactersData,setİsLoading}=apiSlice.actions
export default apiSlice.reducer