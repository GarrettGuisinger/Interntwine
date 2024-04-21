import React from 'react'
import { Link } from 'react-router-dom';


const navbar = () => {
  return (
    
    <>

<div className='sticky top-0 flex flex-col border border-gray-500 w-64'>
          <nav className='sticky top-0 flex flex-col'>
          <div className='flex items-center justify-center h-32 bg-gray-900 text-white '> INTERNTWINE</div>
            <Link to="/" className='flex items-center justify-center h-48 px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700'>Home</Link>
            <Link to="/Inbox" className='flex items-center justify-center h-48 px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700'>Inbox</Link>
            <Link to="/Jobs" className='flex items-center justify-center h-48 px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700'>Jobs</Link>
            <Link to="/Employers" className='flex items-center justify-center h-48 px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' >Employers</Link>
            
            </nav>
</div>

    </>
  )
}



export default navbar



