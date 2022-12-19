import { configureStore } from "@reduxjs/toolkit";
import  apiReducer from "../featur/api"
 const store = configureStore({
reducer:{
    api:apiReducer
}
})
export default store