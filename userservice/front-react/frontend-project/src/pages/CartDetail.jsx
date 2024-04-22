import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useRazorpay from "react-razorpay";

function CartDetail() {
    const params = useParams()
    const id = params.id
    const [Razorpay] = useRazorpay();
    // const {data:item} = useSelector(state => state.cartitem)
    const item = localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')) : null
    
    // const dispatch = useDispatch()
    const obj = item.find((x)=> x.id === Number(id))
    console.log('item',obj)


    const  paymentHandler = async ()=>{
        let fetchData = {
            method:'PUT',
            headers: {
                // 'Content-Type': 'application/json; charset=UTF-8',
                // Authorization:`Bearer ${userInfo.access}`,
            }
          }
        const data = await fetch('http://127.0.0.1:8000/cartpay/15',fetchData)
        if(data.ok){
            console.log('success fetching data form backend')
            const result = await data.json()
            console.log(result)
            // localStorage.setItem('cartInfo', JSON.stringify(result))
            // const handlePayment = async (result) => {
            //     const order = await createOrder(); //  Create order on your backend
              
            const options = {
                key: "rzp_test_SgJj9vvUNWJn8g", // Enter the Key ID generated from the Dashboard
                amount: result.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: result.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                },
                prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
                },
                notes: {
                address: "Razorpay Corporate Office",
                },
                theme: {
                color: "#3399cc",
                },
            };
            
            const rzp1 = new Razorpay(options);
            
            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            
            rzp1.open();
            
            console.log('calling handle payment')
                // handlePayment(result)
            return result
        }
        else{
            console.log('faild fetching data form backend')
            // localStorage.removeItem('cartInfo')
        }
//         <button id="rzp-button1">Pay</button>
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

        // var options = {
        //     "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
        //     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        //     "currency": "INR",
        //     "name": "Acme Corp", //your business name
        //     "description": "Test Transaction",
        //     "image": "https://example.com/your_logo",
        //     "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        //     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        //         "name": "Gaurav Kumar", //your customer's name
        //         "email": "gaurav.kumar@example.com",
        //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        //     },
        //     "notes": {
        //         "address": "Razorpay Corporate Office"
        //     },
        //     "theme": {
        //         "color": "#3399cc"
        //     }
        // };
        // var rzp1 = new Razorpay(options);
        // document.getElementById('rzp-button1').onclick = function(e){
        //     rzp1.open();
        //     e.preventDefault();
        // }
    }


    return (
        <div className="row justify-content-center mb-3" >
            <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                            className="w-100" />
                        <a href="#!">
                            <div className="hover-overlay">
                            <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)" }}> </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <h6>Mother Theresa College Of Nursing</h6>
                        
                        <div className="mt-1 mb-0 text-muted small">
                        <span>Electronic city</span>
                        <span className="text-primary"> • </span>
                        <span>Bengalure</span>
                        <span className="text-primary"> • </span>
                        <span>Karnadaka<br /></span>
                        </div>
                        <div className="mb-2 text-muted small">
                        <h6 className="text-dark">{obj.course.name}</h6>
                        <span><strong>4</strong> Year Course</span> <br/>
                        <span>Fee : <strong>8 x 50000 = 400000</strong></span> <br/>
                        <span>Total Fee : <strong></strong></span> <span className="text-success">up to 10% off </span> <br/>
                        
                        </div>
                        
                        
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex">
                        <p className="text-muted mb-1 me-1">Admission Fee: </p>&nbsp;
                        <p className="mb-1 me-1"> <strong>10000</strong> </p>&nbsp;
                        </div>
                        
                        <div className="d-flex flex-column mt-4">
                        <button className="btn btn-primary btn-sm" onClick={()=>paymentHandler()} type="button">pay</button>                       
                        {/* <button className="btn btn-danger btn-sm mt-1" onClick={()=>removeFromCartHandler(cart.id)} type="button">Remove</button>                        */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )
}

export default CartDetail
