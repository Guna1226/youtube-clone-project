import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './AppSlice'

const Store = configureStore({
    
    reducer : {
        youtube:AppReducer,
    }
})

export default Store;