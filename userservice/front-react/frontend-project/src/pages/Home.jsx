import React from 'react'
import '../App.css'
import CourseCategory from '../components/CourseCategory'
import CollegeItem from '../components/CollegeItem'
import BlogComponent from '../components/BlogComponent'
import ImageSlider from '../components/ImageSlider'
import { CollegeData, BlogData, RecCourseData, SliderData, CategoryData } from '../components/CollegeData'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Home() {
        const [isVisible, setVisible] = useState(false);

    // Define a function to toggle the state variable
    const closeNavbar = () =>{
        setVisible(!isVisible);
    } 

    
  return (
    <>
        <section className="container-md my-xs-0 mt-2">
            <div className="scroll_container cat-container ">
                {CategoryData.map((slide,index)=>{
                    return(
                        <CourseCategory image={slide.image} key={index} ></CourseCategory>
                        )
                })}         
            </div>
        </section>

        
        <div className='carousel container-md '>
            <ImageSlider slides={SliderData}></ImageSlider>
        </div>

        <section className="container-md mt-2">
            <div className="card shadow m-4 h-25">
        {!isVisible && (
            <>
            <button type="button" className="btn-close"  onClick={closeNavbar}></button>
                <Link>
                    <img src="" alt="add banner"/>
                </Link>
            </>
        )}
            
            </div>
        </section>

        <section className="container-md my-2 p-1">
            <div><h3>Top Colleges</h3></div>
            <div className="scroll_container" >
                {CollegeData.map((slide,index)=>{
                    return(<CollegeItem image={slide.image} key={index} ></CollegeItem>)
                })}
            </div>
        </section>


        <section className="container-md my-2 ">
            <div className="my-1 m-auto" style={{width :"100%", height:"100px"}}>
                <img src="" alt="add banner"/>
            </div>
        </section>

        <section className="container-md my-2 p-1">
            <div><h3>Recomended Courses</h3></div>
            <div className="scroll_container" >
                {RecCourseData.map((slide,index)=>{
                    return(<CollegeItem image={slide.image} key={index} ></CollegeItem>)
                })}
            </div>
        </section>

        <section className="container-md my-2 p-1">
            <div><h3>Blogs</h3></div>
            <div className="scroll_container" >
                {BlogData.map((slide,index)=>{
                    return(<BlogComponent image={slide.image} key={index} ></BlogComponent>)
                })}
            </div>
        </section>


        <section className="container-md">
            <div><h3>Blogs</h3></div>
            <div className="d-flex flex-wrap justify-content-around" >
                
            {BlogData.map((slide,index)=>{
                    return(<BlogComponent image={slide.image} key={index} ></BlogComponent>)
                    
                })}

            </div>
        </section>
    </>
  )
}

export default Home
