import {createSlice} from "@reduxjs/toolkit";

const initialState = {


};
const episodesSlices = createSlice({
    name: 'episodesSlices',
    initialState,
    reducers:{},
    extraReducers:builder => builder
})

const{reducer: episodesReducer, actions} = episodesSlices

const episodesActions ={
    ...actions
}

export {
    episodesReducer,
    episodesActions
}