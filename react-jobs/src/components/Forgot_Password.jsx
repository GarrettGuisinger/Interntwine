import React from 'react'

const Forgot_Password = () => {
  return (
    <>
    <body className='min-h-screen bg-gray-400'>

        <h1 className='flex justify-center text-5xl font-bold py-20'>
            Forgot Password
        </h1>

        <div className='text-center rounded-lg'>

        <form className='pb-4'>
            <label for = "Username:">Email:</label><br/>
            <input type = "text" class = "shadow appearance-none border rounded-lg py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-xl" id = "Username"/>
    
        </form>

        <form className='pb-4'>
            <label for = "Password:">Enter New Password:</label><br/>
            <input type = "text" class = "shadow appearance-none border rounded-lg py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-xl" id = "Username"/>
        </form>

        </div>

        <div className='flex justify-center'>
            <button  button type = "button" className = "text-white font-bold py-2 px-10 rounded-lg bg-green-600 hover:bg-green-500 focus:shadow-xl">
                Sign Up
            </button>
        </div>
        
    </body>
    </>
  )
}

export default Forgot_Password