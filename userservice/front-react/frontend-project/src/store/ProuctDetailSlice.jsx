
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { statusCode } from '../utils/StatusCode'

const initialState = {data:{}, status:'idle'}

const ProductDetailSlice = createSlice({
    name:'productDetail',
    initialState,

    reducers:{},

    extraReducers:(builder)=>{
        builder.
        addCase(getProductDetails.pending, (state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(getProductDetails.fulfilled, (state, action)=>{
            state.data = action.payload 
            state.status = statusCode.IDLE
        })
        .addCase(getProductDetails.rejected,(state, action)=>{
            state.status = statusCode.ERROR
        })

    }
})

export default ProductDetailSlice.reducer



export const getProductDetails = createAsyncThunk('productDetail/get', async (productId)=>{
    const data = await fetch(`http://127.0.0.1:8000/inventorydetail/${productId}`)
    const result = await data.json()
    return result
})
