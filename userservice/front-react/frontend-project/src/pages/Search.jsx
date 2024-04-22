import React from 'react'
import CollegeListComponent from '../components/CollegeListComponent'
import {useEffect } from 'react'
import { getProducts } from '../store/ProductSlice'
import { useSelector,useDispatch } from 'react-redux'
import { statusCode } from '../utils/StatusCode'

function Search() {
  // const [collegeList, setCollegeList] = useState([])
  const {data:collegeList,status} = useSelector(state => state.products)
  const dispatch = useDispatch()
  console.log('college list ', collegeList)

  useEffect(() =>{
      dispatch(getProducts())
  },[])
  
  if(status === statusCode.LOADING){
    return (<h5>Loading</h5>)
  }
  if(status === statusCode.ERROR){
    return (<h5>error</h5>)
  }
  return (
    <section style={{backgroundColor: "#eee"}}>
        <div className="container py-5">

          {collegeList.map(college => (
            <CollegeListComponent key={college.id} college={college}  />
          ))}         
         
        </div>
    </section>
      )
}

export default Search
