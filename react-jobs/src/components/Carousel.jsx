import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Carousel =()=>{

    const slides = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
        },
        {
            url: 'https://cdn.northropgrumman.com/-/media/wp-content/uploads/DP_0010_logo.jpg?h=900&iar=0&w=1600&rev=ebf2b9a0716246ce976ce26ec1405c6d'
        },
    ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide =() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex-1;
    setCurrentIndex(newIndex)
  }
  const nextSlide =() => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  
  return(
    <div className='max-w-[1300px] h-[200px]  py-2 px-0 group'>
        <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}} className='overflow-hidden w-full h-full rounded-2xl bg-no-repeat bg-center object-scale-down duration-500'>
        </div>
        
    
        <div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick ={prevSlide} size={30}/>
        </div>

        <div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick ={nextSlide} size={30}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (

                <div key = {slideIndex} onClick ={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                </div>
            
            ))}
        </div>
    </div>
  )

}

export default Carousel