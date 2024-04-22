import React from 'react'

function CourseCategory(props) {
  return (
    <div className="cat-item scroll_item m-1 m-xs-0  p-0">
        <div className=" text-center course_category">
            <span className="" ><img className='' src={props.image} alt="" /></span>
            
            <span className="w-75"><p >{props.category}</p></span>
        </div>
    </div>
  )
}

export default CourseCategory
