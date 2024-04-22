import React from 'react'

function OrderComponent() {
  return (
    <div className="row justify-content-center mb-3">
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
                            <div className="mask" style={{backgrounColor: "rgba(253, 253, 253, 0.15)"}}></div>
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
                        <h6 className="text-dark">Courses Name</h6>
                        <span><strong>4</strong> Year Course</span> <br/>
                        <span>Fee : <strong>8 x 50000 = 400000</strong></span> <br/>
                        <span>Total Fee : <strong>360000</strong></span> <span className="text-success">up to 10% off </span> <br/>
                        
                      </div>
                      
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex">
                        <p className="text-muted mb-1 me-1">Admission Fee: </p>&nbsp;
                        <p className="mb-1 me-1"> <strong>10000</strong> </p>&nbsp;
                      </div>
                      <div>
                        <span className="text-success"><strong>Your payment is Success</strong></span>
                      </div>
                      <div>
                        <span>Remaing <strong>100 days </strong> to report in college</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default OrderComponent
