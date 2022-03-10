import { createSlice } from "@reduxjs/toolkit";

const bumpButtonContext = createSlice({
    name:"bump",
    initialState:{bumpButtonFlag:false},
    reducers:{
        toggleBumpFlag:(state,action)=>{
            state.bumpButtonFlag = action.payload;
        }
    }
});

export const bumpButtonActions = bumpButtonContext.actions;

export default bumpButtonContext.reducer;