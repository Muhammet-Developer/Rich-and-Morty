import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:true,
    charactersData:[],
    data:[]
}

const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setCharactersData:(state,{payload})=>{
            state.charactersData=payload;
        },
        setData:(state,{payload})=>{
            state.data=payload;
        },
        fetchStart: (state) => {
            state.isLoading = true;
          },
        fetchFail: (state) => {
            state.isLoading = false;
        },
    }
})

export const {setCharactersData,setData,fetchStart,fetchFail}=apiSlice.actions
export default apiSlice.reducer