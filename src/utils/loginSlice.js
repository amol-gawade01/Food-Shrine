import { createSlice,current } from "@reduxjs/toolkit";
import { useState } from "react";



const loginSlice = createSlice({
    name:'login',
    initialState:{
        userProfile:false,
    },reducers:{
        changeProfile:(state,action) =>{
           state.userProfile = action.payload;
           
          }
    }
})


export const {changeProfile} = loginSlice.actions;
export default loginSlice.reducer;