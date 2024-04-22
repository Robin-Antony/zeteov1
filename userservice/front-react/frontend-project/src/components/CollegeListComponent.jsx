import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function CollegeListComponent({college}) {

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
                        <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}> </div>
                    </div>
                    </a>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{college.name}</h5>
                <div className="d-flex flex-row">
                    <Rating value={college.rating} color={'yellow'}></Rating>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                    <span>{college.place}</span>
                    <span className="text-primary"> • </span>
                    <span>{college.district}</span>
                    <span className="text-primary"> • </span>
                    <span>{college.state}<br /></span>
                </div>
                <div className="mb-2 text-muted small">
                    <h5 className="text-dark">Courses Available</h5>
                    {college.course.map(name =>(
                        <>
                    
                    <span className="text-primary"> • </span>
                    <span>{name}</span>
                        </>
                    ))}
                </div>
                
                
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex">
                    <p className="text-muted mb-1 me-1">Course Fee: </p>&nbsp;
                    <p className="mb-1 me-1">4L to</p>&nbsp;
                    <p className="mb-1 me-1">20L</p>
                </div>
                <h6 className="text-success">up to 10% off </h6>
                <div className="d-flex flex-column mt-4">
                    <Link to={`/college/${college.id}`} className="btn btn-primary btn-sm" type="button">Details</Link>                        
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CollegeListComponent
