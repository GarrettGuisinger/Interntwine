import React from 'react'

const landing_page = () => {
  return (
   <>
 

 <body className = "bg-green-200 min-h-screen p-40">

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
            <button type = "button" className = "btn btn-success text-white font-bold py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-500">
                Login
            </button>
            </div>

        </div>

        <div className="container mt-4 ">
            <p className = "text-center">
                <a href="url" className='text-blue-500 underline'>Forgot password?</a> <br/>
                <a href="url" className='text-blue-500 underline'>Create account</a>
            </p>
        </div>
</body>

   </>
  )
}

export default landing_page

