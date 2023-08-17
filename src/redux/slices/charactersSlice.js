import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";


const initialState = {
    characters: []
}

 const all = createAsyncThunk(
     'charactersSlice/all',
     async ({iDs} ,thunkAPI)=>{
         try {
             const {data}= await (characterService.getAll(iDs))
             return data
         }catch (e) {
             return thunkAPI.rejectWithValue(e.response.data)
         }
     }

 )
const charactersSlice = createSlice({
        name: 'charactersSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder.addCase(all.fulfilled, (state, action)=>{
                state.characters = action.payload
            })
    }
)

const {reducer:characterReducer,actions} = charactersSlice

const characterActions = {
    all,
}

export {
    characterReducer,
    characterActions
}