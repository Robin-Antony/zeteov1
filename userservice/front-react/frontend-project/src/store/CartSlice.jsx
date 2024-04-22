import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { statusCode } from "../utils/StatusCode";


const cartInfo = localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')) : []

const initialState = {data:cartInfo, status:'idle'}

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        add(state,action){
            state.data.push(action.payload)
        },
        remove(state,action){
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        clearCart(state,action){
            state.data = []
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCart.pending, (state,action)=>{
            state.status = statusCode.LOADING
        })
        .addCase(getCart.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(getCart.rejected, (state,action)=>{
            state.status = statusCode.ERROR
        })

    }

})

export default CartSlice.reducer 

export const {add, remove,clearCart} = CartSlice.actions

export const getCart = createAsyncThunk('cart/get', async (userInfo)=>{
    let fetchData = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization:`Bearer ${userInfo.access}`,
        }
      }
    const data = await fetch('http://127.0.0.1:8000/cart',fetchData)
    if(data.ok){
        console.log('success fetching data form backend')
        const result = await data.json()

        localStorage.setItem('cartInfo', JSON.stringify(result))
        return result
    }
    else{
        console.log('faild fetching data form backend')
        localStorage.removeItem('cartInfo')
    }
})

export function removeFromCart(item){
         return async function getProductsThunk(dispatch, getState){
            let fetchData = {
                method: 'DELETE',
                headers: new Headers({
                  'Content-Type': 'application/json; charset=UTF-8',
                })
              }
            const data = await fetch(`http://127.0.0.1:8000/cartdetails/${item}`,fetchData)

           
            dispatch(remove(item))
         }
    }

export function addToCart(course){
            return async function getProductsThunk(dispatch, getState){
                let courseData = {
                    "courseid":course
                }
                let fetchData = {
                    method: 'POST',
                    body: JSON.stringify(courseData),
                    headers: new Headers({
                      'Content-Type': 'application/json; charset=UTF-8'
                    })
                  }
            const data = await fetch('http://127.0.0.1:8000/cart',fetchData)
            const result = await data.json()

            dispatch(add(result))
            }
    }