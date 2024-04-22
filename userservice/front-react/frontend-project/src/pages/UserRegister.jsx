import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { registerUser } from '../store/UserRegisterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from "react-router-dom"


const UserRegister = () => {
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const userData = useSelector((state) => state.userData)
  // const {userInfo} = userData
  
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


  useEffect(()=>{ 
      if(userInfo){
          const path = (`/`)
          navigate(path)
      } 
  })

const submitForm = (register)=>{
    dispatch(registerUser(register))
  }
  return (
    <section className="container my-5 ">
        <div className="">
          
            <section className=" " style={{backgroundColor: ""}}>
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                      <div className="card" style={{borderRadius: "1rem"}}>
                        <div className="row g-0">
                          <div className="col-md-6 col-lg-5 d-none d-md-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                              alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
                          </div>
                          <div className="col-md-6 col-lg-7 d-flex align-items-center">
                            <div className="card-body p-4 p-lg-5 text-black">
              
                              <div>
                                
              
                                <div className="d-flex align-items-center mb-3 pb-1">
                                  <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                                  <span className="h1 fw-bold mb-0">Logo</span>
                                </div>
              
                                <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Register new account</h5>
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                      <i className="fab fa-facebook-f"></i>
                                    </button>
                            
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                      <i className="fab fa-google"></i>
                                    </button>
                            
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                      <i className="fab fa-twitter"></i>
                                    </button>
                            
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                      <i className="fab fa-github"></i>
                                    </button>
                                </div>
                                <p>or</p>
                                <form action="" onSubmit={handleSubmit(submitForm)}>
                                  <div className="form-outline mb-4">
                                    <input type="email" {...register('email')} required id="form2Example17" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <input type="text" {...register('first_name')} required id="form2Example171" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form2Example17">First Name</label>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <input type="text" {...register('last_name')} required id="form2Example172" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form2Example17">Last Name</label>
                                  </div>

                                  <div className="form-outline mb-4">
                                    <input type="text" {...register('username')} required id="form2Example173" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form2Example17">User Name</label>
                                  </div>
                
                                  <div className="form-outline mb-4">
                                    <input type="password" {...register('password')} required id="form2Example27" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                  </div>
                
                                  <div className="pt-1 mb-4">
                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                                  </div>
                
                                  <Link to={'/account-recovery/'} className="small text-muted" href="#!">Forgot password?</Link> <br />
                                   <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Have an account? <Link to={'/login'} 
                                      style={{color: "#393f81"}}>Login here</Link></p> <br />
                                  <a href="#!" className="small text-muted">Terms of use.</a> &nbsp;
                                  <a href="#!" className="small text-muted">Privacy policy</a>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>

    </section>
  )
}

export default UserRegister
