import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { statusCode } from "../utils/StatusCode";


const initialState = {data:[], status:'idle'}
const CoursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers:{},

    extraReducers: (builder)=>{
        builder
        .addCase(getCourses.pending, (state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(getCourses.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(getCourses.rejected, (state,action)=>{
            state.status = statusCode.ERROR
        })

    }
})

export default CoursesSlice.reducer

export const getCourses = createAsyncThunk('courses/get', async (college_id)=>{
    const data = await fetch(`http://127.0.0.1:8000/inventorycourse/college/${college_id}`)
    const result = await data.json()
    return result
})