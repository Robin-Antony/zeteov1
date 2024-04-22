import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { statusCode } from "../utils/StatusCode";

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
    userInfo,
    status: statusCode.IDLE
}
const UserRegisterSlice = createSlice({
    name : 'registerUser',
    initialState,
    reducers:{
        logoutNewUser(state, action){
            state.userInfo = null
        }
    },

    extraReducers: (builder)=>{
        builder.
        addCase(registerUser.pending,(state, action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.status = statusCode.IDLE
            state.userInfo = action.payload
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.status = statusCode.ERROR
    
        })
    }

})


export default UserRegisterSlice.reducer
export const {logoutNewUser}  = UserRegisterSlice.actions

export const registerUser = createAsyncThunk('userRegister/post', async (userData)=>{
    let fetchData = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        })
    }
    const data = await fetch('http://127.0.0.1:8000/register/user',fetchData)
    const result = await data.json()
    localStorage.setItem('userInfo', JSON.stringify(result))
    return result
})