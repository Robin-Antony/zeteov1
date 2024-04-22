import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () =>{
    const userData = useSelector((state)=> state.userData)
    const {userInfo} = userData
    if(userInfo === null){
        return(
            <Navigate to='login/'/>
        )
    }
    else{
        return(
            <Outlet></Outlet>
        )
    }
}

export default PrivateRoute
