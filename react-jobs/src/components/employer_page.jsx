import Container from 'postcss/lib/container';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import Search from './search'
import Footer from './Footer';

const employer_page = () => {
  return (
   <>

<body className = "bg-gray-300 min-h-screen">
    <div className="flex ">
    <Navbar/>
    <Search/>
    

    <div className='bg-gray-300'>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    <div className='flex-2 flex-col border border-gray-500 mt-4 ml-6' style={{ width: "1280px", height: "256px"}}>

    </div>
    </div>



    </div>
    <Footer/> 
    </body>
   </>
  )
}

export default employer_page;
