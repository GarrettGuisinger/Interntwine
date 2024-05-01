import React, { useState } from 'react';
import axios from 'axios';

const search = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        location: '',
        visitedEvents: '',
        software: false,
        hardware: false,
        business: false,
        research: false,
        engineering: false,
        education: false,
        sales: false
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/search/', formData)
    };
return (
    <>
<div className='sticky flex-1 flex-col border border-gray-500 flex max-w-64  flex top-0 ' style={{height: "990px"}}>
<div className='flex items-center justify-center h-32 text-xl bg-gray-900 text-white'> Search</div>
    <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Name">Name</label> 
      <input id="Name" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Location">Location</label>
      <input id="Location" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      <p className='flex flex-col text-xl justify-center items-center'><u>Job Roles</u></p><br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Software">Software</label>
      <input id="Software" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Hardware">Hardware</label>
      <input id="Hardware" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Business">Business</label>
      <input id="Business" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Research">Research</label>
      <input id="Research" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Engineering">Engineering</label>
      <input id="Engineering" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Sales">Sales</label>
      <input id="Sales" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <input id="searchSubmit" type="submit" className='border border-gray-500 w-32 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'/>
      </form> <br/>
    </div>
    </>
)
}

export default search