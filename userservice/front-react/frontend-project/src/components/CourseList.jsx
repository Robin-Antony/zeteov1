import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../store/CartSlice'


function CourseList({course}) {
  const dispatch = useDispatch()

  const addTocart=(course)  =>{
    console.log(course)
    dispatch(addToCart(course))
  }

  return (
  
    <tbody>
        <tr>
        <td>{course.name}</td>
        <td>{course.no_years}</td>
        <td>{course.yearly_fee} Lakh</td>
        <td><del>{course.total_fee} Lakh</del> 
            <p className="text-success">10% off <strong> 720000</strong></p>
        
        </td>
        <td>{course.certifications}</td>
        <td>{course.total_seats}</td>
        <td>{course.available_seats}</td>
        <td>{course.addmission_fee}</td>
        <td style={{minWidth :'100px'}}><button className='primary' onClick={()=>addTocart(course.id)}>Add to Cart</button></td>
        </tr>
        
                    
    </tbody>
  )
}

export default CourseList
