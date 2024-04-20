import React from 'react'
import { Link } from 'react-router-dom';
import Forms from "./form"

function landing_page() {
return <Forms route="api/token/" method="Landing"/>


}
 


{/*
<h1 className="container" > 
            <div className ="text-center font-bold text-5xl"> 
            Welcome to Interntwine 
            </div>
    </h1>      

    <div className="container pb-4">
        <div className ="text-center pt-5">

            <form>
                <label for = "Username:">Username:</label><br/>
                <input type = "text" id = "Username"/>
            </form>

            <form>
                <label for = "Password:">Password:</label><br/>
                <input type = "text" id = "Password"/>
            </form>

            </div>
        </div>
             

        <div className = "container pb-4">

            <div className = "text-center">
                <Link to="/Home">   
            <button type = "button" className = "btn btn-success text-white font-bold py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-500">
                Login
            </button>
            </Link>
            </div>

        </div>

        <div className="container mt-4 ">
            <p className = "text-center">
                <Link to="/Forgotpassword">
                <a href="url" className='text-blue-500 underline'>Forgot password?</a> <br/>
                </Link>
                <Link to="/Createaccount">
                <a href="url" className='text-blue-500 underline'>Create account</a>
                </Link>
            </p>
  </div>*/}


  

export default landing_page;

