import React, { useEffect } from 'react'
import CourseList from '../components/CourseList'
import { useDispatch, useSelector, } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../store/ProuctDetailSlice'
import { getCourses } from '../store/CoursesSlice'
function CollegeDetails({match}) {
    const dispatch = useDispatch()
    const params = useParams()
    const {data:college} = useSelector(state => state.product)
    const {data:courses} = useSelector(state => state.courses)
    console.log('college', courses)

    useEffect(()=>{
        dispatch(getProductDetails(params.id))
        dispatch(getCourses(params.id))
    },[])


  return (
    <section className="container-md">
        <div className="my-md-5 p-md-3 p-sm-1">
            <h5>{college.name}</h5>
            <div className="d-flex flex-row">
                <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <span>310</span>
            </div>
            <div className="">
                <p className="text-muted p-0 my-0">Location:</p>
                <p className="">{college.place} {college.district} {college.state}</p>
            </div>
           

            <div>
        <div className="" style={{fontSize: "14px"}}>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Course</th>
                    <th scope="col">Years</th>
                    <th scope="col">fee/sem</th>
                    <th scope="col">totaFee</th>
                    <th scope="col">Certification</th>
                    <th scope="col">Total seats</th>
                    <th scope="col">Available seats</th>
                    <th scope="col">Addmission fee</th>
                    </tr>
                </thead>
                {courses.map(course =>(
                    <CourseList key={course.id} course={course}></CourseList>
                ))}
                
            </table>
        </div>
    </div>
            
            
                
            <div className="mt-5">
                <h5 className="display-5">Cambus </h5>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-md-3 mb-1 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Boat on Calm Water"
                        />
                
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>
                
                    <div className="col-lg-4 mb-md-3 mb-1 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Mountains in the Clouds"
                        />
                    
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Boat on Calm Water"
                        />
                    </div>
                
                    <div className="col-lg-4 mb-md-3 mb-1 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Waves at Sea"
                        />
                    
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            className="w-100 shadow-1-strong rounded mb-md-3 mb-1"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollegeDetails
