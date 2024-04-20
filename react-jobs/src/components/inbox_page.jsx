import React from 'react'
import Text_Box from './Text_Box';
import Navbar from './navbar'
const inbox_page = () => {
  return ( 
<>
<body>

<div className='flex h-screen bg-gray-300 '>

<Navbar/>

<div className='flex flex-col border border-gray-500 w-70'>

  <nav className='flex flex-col'>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 1</h3>
      <div className="ml-2"> {/* Wrapper for image and text */}
      <img src="https://i1.sndcdn.com/artworks-BJV6jTbECzqd8BXO-IyDtXQ-t500x500.jpg" alt="Contact 1" className="w-12 h-auto rounded-full" />
      <p> Hello, I was interested in...</p>
      </div>
    </div>
            </nav>
</div>
<div className='flex flex-col flex-grow'>
          <div className='bg-gray-200 flex items-center justify-center h-1/5 '>
            <h1 className='text-3xl'>
            Inbox
            </h1>
          </div>

          <div className = "bg-gray-100 flex items-center justify-center flex-grow relative">
          {/* <img src={sdsu} alt="sdsu" className='rounded-lg sm:w-32 sm:h-32 lg:w-32 lg:h-32 absolute top-5 left-5 '   />
          <img src={person} alt="Person" className='rounded-full w-60 h-60 absolute top-5 left-30 '/>  */}
            <p className='absolute top-60 left-80 text-3xl'>
               <br/>
            </p>
            <Text_Box/>
          </div>

<div className='bg-gray-200 flex items-center justify-center flex-grow'>
<p>More info here</p>

</div>


          </div>
</div>
</body>
</>
  );
}

export default inbox_page