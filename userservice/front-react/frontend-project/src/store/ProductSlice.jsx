import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { statusCode } from '../utils/StatusCode'



const initialState = { data:[], status:'idle'}

const ProductSlice = createSlice({
    name : 'products',
    initialState,
    reducers :{
        // fetchProducts(state,action){
        //     state.data = action.payload
        // }
    },

    extraReducers: (builder)=>{
        builder
        .addCase(getProducts.pending,(state, action)=>{
            // state.data = action.payload
            state.status = statusCode.LOADING
        })
        .addCase(getProducts.fulfilled,(state, action)=>{
            state.data = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(getProducts.rejected,(state, action)=>{
            // state.data = action.payload
            state.status = statusCode.ERROR
        })
    }


})

// export const {fetchProducts} = ProductSlice.actions
export default ProductSlice.reducer

export const getProducts = createAsyncThunk('products/get', async (keyword)=>{
    const data = await fetch(`http://127.0.0.1:8000/inventory/?keyword=${keyword}`)
    const result = await data.json()
    return result
})


// export function getProducts(){
//      return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('http://127.0.0.1:8000/inventory')
//         const result = await data.json()
//         dispatch(fetchProducts(result))
//      }
// }