//import React from 'react'
import sdsu from "../assets/images/sdsu.jpg"
import person from "../assets/images/person.jpg"
import { Link } from 'react-router-dom';
import Navbar from './navbar'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const home_page = () => {
  const [username, setUsername] = useState('');

  useEffect(() =>{
    const fetchUsername = async () => {
      try {
        const response = await axios.get('/api/get_username/');
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  return ( 

<>
<body>

<div className='flex h-full bg-gray-300 '>

          <Navbar/>

      <div className='flex flex-col flex-grow'>
          <div className='bg-gray-200 flex items-center justify-center h-1/5 '>
            <h1 className='text-3xl'>
            Forge Your Future: Explore Endless Internship Opportunities
            </h1>
          </div>

          <div className = "bg-gray-100 flex items-center justify-center flex-grow relative">
           <img src={sdsu} alt="sdsu" className='rounded-lg sm:w-32 sm:h-32 lg:w-32 lg:h-32 absolute top-5 left-5 '/>
          <img src={person} alt="Person" className='rounded-full w-60 h-60 absolute top-5 left-30 '/> 
          <button className="w-32 absolute top-0 right-0 mt-4 mr-4 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 form-button">
            <Link to="/logout">Log Out</Link>
          </button>
 
            <p className='absolute top-64 left-85 text-3xl'>
               {username || 'guest'}<br/>
            </p>
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

export default home_page;








