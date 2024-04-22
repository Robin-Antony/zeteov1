import React from 'react'
import CartComponent from '../components/CartComponent'
import { getCart } from '../store/CartSlice'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { statusCode } from '../utils/StatusCode'

function Cart() {
  
  const cartList = localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')) : []
  const {status} = useSelector(state =>state.cartitem)
  const {userInfo} = useSelector(state =>state.userData)
  const dispatch = useDispatch()

  // useEffect(() =>{
  //   dispatch(getCart(userInfo))
  // },[userInfo])

  if(status === statusCode.LOADING){
    return (<h5>Loading</h5>)
  }
  if(status === statusCode.ERROR){
    return (<h5>error</h5>)
  }
  if(status === statusCode.IDLE){
    
    return (
      <section style={{backgroundColor: "#eee"}}>
          <div className="container py-5">
            {cartList.map(cart => (
              <CartComponent key={cart.id} cart={cart}  />
            ))}         
           
          </div>
      </section>
    ) 
  }

   
}

export default Cart
