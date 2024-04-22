import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { statusCode } from '../utils/StatusCode'
// import { useDispatch } from "react-redux";



const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
    userInfo,
    status:'idle'
}

const UserLoginSlice = createSlice({
    name : 'userLogin',
    initialState,
    reducers : {
        logoutUser(state, action){
            localStorage.setItem('userInfo',null)
            state.userInfo = null
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending,(state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.userInfo = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.status = statusCode.ERROR
        })
        .addCase(refreshToken.pending,(state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(refreshToken.fulfilled,(state,action)=>{
            state.status = statusCode.IDLE 
            state.userInfo = action.payload
        })
        .addCase(refreshToken.rejected,(state,action)=>{
            state.status = statusCode.ERROR
        })
    }

})

export default UserLoginSlice.reducer

export const {logoutUser} = UserLoginSlice.actions

export const loginUser = createAsyncThunk('login/post', async (credentials)=>{
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      }
    const data = await fetch('http://127.0.0.1:8000/api/token/',fetchData)
    const result = JSON.stringify(await data.json())
    
    if(data.ok){
        localStorage.setItem('userInfo', result)
        return result
    }
    else{
        
        localStorage.setItem('userInfo', null)
        console.log('user credentials are invalid')
        return null
    }
    
})

export const refreshToken = createAsyncThunk('refresh/post',async (refreshToken)=>{
    console.log('refreshing token')
    let fetchData = {
        method: 'POST',
        body: JSON.stringify({'refresh':refreshToken.refresh}),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      }
    try{
        const data = await fetch('http://127.0.0.1:8000/api/token/refresh/',fetchData)
        const result = await data.json()
        if (!data.ok) {
            console.log('bad request error')
            localStorage.removeItem('userInfo')
            return null
          }
          else{
            console.log('request is ok')
            localStorage.setItem('userInfo', JSON.stringify(result))
            return result
          }
        
        
    }
    catch(e){
        console.log('error', e)
    }

   
})