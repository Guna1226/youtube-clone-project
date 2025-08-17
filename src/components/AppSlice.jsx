import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name : "youtubee",
    initialState : {
        title : null
    },
    reducers:{
        addTitle:(state,action) => {
            state.title = action.payload;
        }
    }
})

export const {addTitle} = AppSlice.actions;

export default AppSlice.reducer;