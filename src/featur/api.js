import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    charactersData:[],
    // deneme:[],
    data:[]
}

const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setCharactersData:(state,{payload})=>{
            state.charactersData=payload;
        },
        // setDeneme:(state,{payload})=>{
        //     state.deneme=payload;
        // },
        setData:(state,{payload})=>{
            state.data=payload;
        },
        setİsLoading:(state)=>state.setİsLoading
    }
})

export const {setCharactersData,setİsLoading,setData}=apiSlice.actions
export default apiSlice.reducer