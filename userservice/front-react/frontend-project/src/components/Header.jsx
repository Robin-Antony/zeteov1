import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/UserLoginSlice';
import { logoutNewUser } from '../store/UserRegisterSlice';
import { refreshToken } from '../store/UserLoginSlice';
import { useDispatch,useSelector } from 'react-redux';
import { getCart ,clearCart} from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';


const Header = () => {
  const cartInfo = localStorage.getItem('cartInfo') ? JSON.parse(localStorage.getItem('cartInfo')) : [] 
  
  const  userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  const {userInfo:storeUserInfo} = useSelector((state)=>state.userData )
  const [keyword, setKeyword] = useState()
  // const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  const [isCollapsed, setIsCollapsed] = useState(true);
  
      // Declare a state variable to store the navbar collapse status
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fourmin = 1000* 60*4
  

  // in initial render checks for refresh token and if not let user logout
  //call refresh token in every four minutes
  useEffect(()=>{
    let interval = setInterval(()=>{
      if(userInfo){
        try{
          dispatch(refreshToken(userInfo))
          // dispatch(getCart(userInfo))
        }catch{
          console.log('token expired')
          dispatch(logoutUser())
        }
      }
    },fourmin)
    
    return ()=> clearInterval(interval)
  },[])

  useEffect(()=>{ 
    console.log('Ingo', storeUserInfo)
    dispatch(getCart(storeUserInfo))
  },[])


  const logOutHandler = ()=>{
      dispatch(logoutUser())
      dispatch(logoutNewUser())
      dispatch(clearCart())
      localStorage.setItem('cartInfo', [])
      const path = (`/login/`)
      navigate(path)  
  }

  const SearchSubmitHandler = (e)=>{
    e.preventDefault()
    dispatch(getProducts(keyword))
    console.log(keyword)
  }

  // Define a function to toggle the state variable
  const toggleNavbar = () =>{
    console.log(isCollapsed)
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed)
  }


  return (
    <section className=" container-md">
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <header className="row py-2 mt-1">
            <div className="col-4">
                <h3 className="text-center "><Link to="" className="text-dark link">Zeteo</Link></h3>
            </div>
            <div className="col-6">
                <div className="float-end py-1 ">
                    <Link to='search' className="px-2 text-dark link">
                      <input type="text" onChange={(e)=> setKeyword(e.target.value)}/>
                      <i onClick={SearchSubmitHandler} className="fa-solid fa-magnifying-glass"/>
                      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    </Link>
                    <Link to='/cart' className="px-2 text-dark"><i className="fa-solid fa-cart-shopping">{cartInfo.length}</i></Link>
                    <Link to='profile' className="px-2 text-dark"><i className="fa-solid fa-user"></i></Link>
                    { userInfo ?
                    <Link to='register' onClick={logOutHandler} className="px-2 text-dark link"><span className="">LogOut</span></Link>
                    : <Link to='login' className="px-2 text-dark link"><span className="">Login</span></Link> }
                    
                    {/* <a href="" className="px-2 text-dark d isplay-5"><i className="fa-solid fa-bars"></i></a> */}
                </div>
            </div>
            <div className="col-2 toggler_relative">
                
                <span className="px-2 text-dark display-6" onClick={toggleNavbar} ><i className="fa-solid fa-bars"></i></span>
                
            </div>
            {/* <hr/> */}
            
            {!isCollapsed && (
                <div class=" navbar-collapse toggler_absolute w-50" id="#navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <Link class="nav-link" aria-current="page" path=''>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" href="#">Course</Link>
                        </li>
                    </ul>
                </div>
                )}
        </header>
    </section>
  )
}

export default Header
