import Container from 'postcss/lib/container';
import React from 'react'
import { Link } from 'react-router-dom';

const employer_page = () => {
  return (
   <>

<body className = "bg-gray-300">
    <div className="flex">
    <div className='flex-1 flex-col border border-gray-500 w-64 sticky top-0' style={{height: "990px"}}>
      
    <div className='flex items-center justify-center h-32 bg-gray-900 text-white'> INTERNTWINE</div>
        <nav>
            
            <a href="#Home" className='flex items-center justify-center px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' style={{height: "172px"}}>Home</a>
            <a href="https://www.youtube.com/" className='flex items-center justify-center px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' style={{height: "172px"}}>Inbox</a>
            <a href="https://app.joinhandshake.com/stu/student_onboardings/new" className='flex items-center justify-center px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' style={{height: "172px"}}>Events</a>
            <a href="https://www.linkedin.com/in/luiz-gonzalez-bautista/"className='flex items-center justify-center px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' style={{height: "172px"}}>Jobs</a>
            <a href="w3schools.com" className='flex items-center justify-center px-4 text-gray-700 hover:bg-gray-400 hover:text-white border-b border-gray-700' style={{height: "172px"}}>Employers</a>
            
        </nav>
    </div>
    <div className='flex-1 flex-col border border-gray-500 w-64 mr-4 sticky top-0' style={{height: "990px"}}>
    <div className='flex items-center justify-center h-32 text-xl bg-gray-900 text-white'> Search</div>
    <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Name">Company Name</label> 
      <input id="Name" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Location">Location</label>
      <input id="Location" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Distance">Distance</label>
      <input id="Distance" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Visited Events">Visited Events</label>
      <input id="Visited Events" type="text" class="w-48 border rounded-md px-4"/>
      </form> <br/>
      {/*<form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Employee">Employee Name</label>
      <input id="Employee" type="text" class="w-48 border rounded-md px-4"/>
  </form> <br/> */}
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
      <label className="mr-2" for="Education">Education</label>
      <input id="Education" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <label className="mr-2" for="Sales">Sales</label>
      <input id="Sales" type="checkbox"/>
      </form> <br/>
      <form className='flex flex-col justify-center items-center'>
      <input id="searchSubmit" type="submit"/>
      </form> <br/>
    </div>

    <div>
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
    </body>
   </>
  )
}

export default employer_page;
