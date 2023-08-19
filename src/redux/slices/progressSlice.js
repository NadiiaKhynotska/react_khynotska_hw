import {createSlice} from "@reduxjs/toolkit";

let initialState={
    isProgress:false
};
const progressSlice = createSlice({
    name: 'progressSlice',
    initialState,
    reducers:{
        setIsProgress:(state, action)=>{
            state.isProgress = action.payload
        }
    }
})

const {reducer:progressReducer,actions:progressActions}=progressSlice

export {
    progressActions,
    progressReducer
}