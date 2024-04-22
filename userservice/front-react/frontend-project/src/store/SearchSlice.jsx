import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statusCode } from "../utils/StatusCode";

const initialState = {data:[], state:'idle'}
const SearchSlice = createSlice({
    name :'search',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
})

export default SearchSlice.reducer
