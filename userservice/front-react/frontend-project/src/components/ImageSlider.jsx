import React, {useState, useEffect} from 'react'
import { SliderData } from './CollegeData'
function ImageSlider({slides}) {

    const [current, setCurrent] = useState(1)
    const length = slides.length
    const nextSlice = ()=>{
        setCurrent(current === length- 1?0: current+1)
    }
    const previousSlice = ()=>{
        setCurrent(current === 0?length-1: current-1)
    }

    useEffect(() =>{
      let timer = setTimeout(()=>{
        if(current <= length-1){
          setCurrent(current+1);
        }
        if(current === length-1){
          setCurrent(0);
        }
      }, 3000)
      return () => clearTimeout(timer)
    }, [current])

    // useEffect(() => {
    //   const next = (current + 1) % length;
    //   const id = setTimeout(() => setCurrent(next), 2000);
    //   return () => clearTimeout(id);
    // }, [current]);

  return (
    <div className='slider'>
        
        <span className=" left_arrow" onClick={previousSlice}><i className="fa-solid fa-chevron-left"></i></span>
        <span className=" right_arrow" onClick={nextSlice}><i className="fa-solid fa-chevron-right"></i></span>
      {SliderData.map((slide, index) =>{
        return (
            <div className={index === current?"active":'slide'} key={index}>
                {index === current && (<img  src={slide.image} alt="banner" />)}
                
            </div>
        )
      })}
    </div>
  )
}

export default ImageSlider
