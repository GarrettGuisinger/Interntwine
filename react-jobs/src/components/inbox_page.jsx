import React from 'react'
import sdsu from "../assets/images/sdsu.jpg"
import person from "../assets/images/person.jpg"
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import Text_Box from './Text_Box';

const inbox_page = () => {
  return ( 

<>
<body>

<div className='flex h-full bg-gray-300 '>


          <Navbar/>
          <div className='flex flex-col border border-gray-500 w-70 h-full'>

  <nav className='flex flex-col'>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 1</h3>
      <div className="ml-2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" alt="Contact 1" className="w-12 h-auto rounded-full bg-white" />
      <p> Hello, I was interested in...</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 2</h3>
      <div className="ml-2">
      <img src="https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square.jpg" alt="Contact 2" className="w-12 h-12 rounded-full bg-white" />
      <p> We have an opening aval...</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 3</h3>
      <div className="ml-2">
      <img src="https://i.pinimg.com/564x/e2/cd/42/e2cd4264ef814fa8c1db180db1b5d1de.jpg" alt="Contact 3" className="w-12 h-12 rounded-full bg-white" />
      <p> Would you be availble for.....</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 4</h3>
      <div className="ml-2">
      <img src="https://logowik.com/content/uploads/images/facebook-meta7158.jpg" alt="Contact 4" className="w-12 h-12 rounded-full bg-white" />
      <p> Unfortnatley at this time we....  </p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 5</h3>
      <div className="ml-2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/240px-Microsoft_icon.svg.png" alt="Contact 5" className="w-12 h-12 rounded-full bg-white" />
      <p> Just wanted to follow up on...</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 6</h3>
      <div className="ml-2">
      <img src="https://logowik.com/content/uploads/images/167_tesla_motors.jpg" alt="Contact 6" className="w-12 h-12 rounded-full bg-white" />
      <p> Anxious to learn more about...</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 7</h3>
      <div className="ml-2">
      <img src="https://ih1.redbubble.net/image.1701976423.1227/fposter,small,wall_texture,square_product,600x600.jpg" alt="Contact 7" className="w-12 h-12 rounded-full bg-white" />
      <p> Excited about the prospect of...</p>
      </div>
    </div>
    <div className='border-b border-black pb-4 hover:bg-gray-400 hover:text-white'>
      <h3 className='flex text-gray-700 mb-0'>Contact 8</h3>
      <div className="ml-2">
      <img src="https://logowik.com/content/uploads/images/814_amd_logo.jpg" alt="Contact 8" className="w-12 h-12 rounded-full bg-white" />
      <p> Currently we are offering...</p>
      </div>
    </div>
            </nav>
</div>

      <div className='flex flex-col flex-grow'>
          <div className='bg-gray-200 flex items-center justify-center h-16'>
            <h1 className='text-3xl'>
            Inbox
            </h1>
          </div>


          <div className = "bg-gray-100 flex items-bottom justify-center flex-grow relative w-full h-20 pb-20">
          <p className='flex end top-60 left-80 text-4xl'>
               <br/>
            </p>
            <Text_Box/>
          </div>

          </div>
</div>
</body>
</>
  );  
}

export default inbox_page;








