import React from 'react'
import { Link } from 'react-router-dom'

function CourseDetails() {
  return (
    <section style={{backgroundColor: "#eee"}}>
        <div class="container py-5">
            <div class="row justify-content-center mb-3">
                <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                            class="w-100" />
                            <a href="#!">
                            <div class="hover-overlay">
                                <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                            </div>
                            </a>
                        </div>
                        </div>
                        <div class="col-md-6 col-lg-9 col-xl-9">
                            <h5><Link to="/college" className=''>Mother Theresa College Of Nursing</Link></h5>
                            <div class="d-flex flex-row">
                                <div class="text-warning mb-1 me-2">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </div>
                                <span>310</span>
                            </div>
                            
                            <div class="mt-1 mb-0 text-muted small">
                                <span>Electronic city</span>
                                <span class="text-primary"> • </span>
                                <span>Bengalure</span>
                                <span class="text-primary"> • </span>
                                <span>Karnadaka<br /></span>
                            </div>
                            
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <div class="row justify-content-center mb-3">
                <div class="col-md-12 col-xl-10">
                    <div class="card shadow-0 border rounded-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-xl-6">
                                    <div class="mb-2 text-muted small">
                                    <h5 class="text-dark">Bsc Nursing</h5>
                                    <h6 class="text-info">Fee structure</h6>
                                    <span><strong>4</strong> Year Course <span class="text-muted">(8 semisters)</span></span> <br/>
                                    <span>Fee : <strong>50000 </strong> per semister</span> <br/>
                                    <span>Actual Fee : <strong><del>400000</del></strong><h6 class="text-success d-block">up to 10% off </h6></span>
                                    <span>Total Fee at end of course : <strong>360000</strong></span> <br/>
                                    
                                    <h6 class="text-info">Certification</h6>
                                    <div class="mt-1 mb-0 small">
                                        <span>Electronic city</span>
                                        <span class="text-primary"> • </span>
                                        <span>Bengalure</span>
                                        <span class="text-primary"> • </span>
                                        <span>Karnadaka<br /></span>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-6 border-sm-start-none border-start">
                                    <div class="d-flex">
                                        <p class="text-muted mb-1 me-1">Admission Fee: </p>&nbsp;
                                        <p class="mb-1 me-1"> <strong>10000</strong> </p>&nbsp;
                                    </div>
                                    <div>
                                        <span class="text-warning">Admisson Ends in 23/05/ 2024</span>
                                    </div>
                                    <div>
                                        <span>Remaing <strong>100 days </strong> to report in college</span>
                                    </div>
                                    <div>
                                        <span>Total Seats <strong>100  </strong></span> <br/>
                                        <span>Available Seats <strong>60  </strong></span> <br/>
                                    </div>
                                    <div className="d-flex flex-column mt-4">
                                        <button className="btn btn-warning btn-sm" type="button">Add to Cart</button>                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            
        </div>
       
    </section>
  )
}

export default CourseDetails
