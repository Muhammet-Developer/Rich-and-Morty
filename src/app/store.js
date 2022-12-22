import { configureStore } from "@reduxjs/toolkit";
import  apiReducer from "../features/api"
 const store = configureStore({
reducer:{
    api:apiReducer
}
})
export default store