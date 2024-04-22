import React from 'react'
import { Link } from 'react-router-dom'

function BlogComponent(props) {
  return (
    <div className="m-lg-4 m-md-3 m-sm-2 m-1 my-5 scroll_item top_college_container shadow rounded" >
      <div className='clg_flex'>
        <Link>
          <div className="text-center top_clg rounded">
              <img className='w-100 rounded' src={props.image} key={props.id} alt="image" />
          </div>
        </Link>
        <div className='p-1 m-1 rounded flex-grow-1 w-100'>
          <div className=''>
            {/* <Rating color={'#f8e825'} value={4}  /> */}
            <span>this is some content this i</span> <br />
            <span>this is some content this i</span> <br />
          </div>
        </div>
      </div>
    </div>
  )

}


export default BlogComponent
