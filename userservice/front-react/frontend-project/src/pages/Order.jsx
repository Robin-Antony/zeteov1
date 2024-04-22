import React from 'react'
import OrderComponent from '../components/OrderComponent'

function Order() {
  return (
    <section style={{backgroundColor: "#eee"}}>
        <div className="container py-5">
          <OrderComponent></OrderComponent>
          <OrderComponent></OrderComponent>
          <OrderComponent></OrderComponent>
         
        </div>
    </section>
  )
}

export default Order
