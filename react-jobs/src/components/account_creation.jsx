import React from 'react'

const account_creation = () => {
  return (
    <>
    <body className='bg-gray-400 min-h-screen'>

        <h1 className='font-bold text-5xl flex justify-center py-20'>
            Create Account
        </h1>


        <div className='text-center rounded-lg'>

            <form className='pb-4'>
                <label for = "Username:">Email:</label><br/>
                <input type = "text" class = "shadow appearance-none border rounded-lg py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-lg" id = "Username"/>
                
            </form>

            <form>
                <label for = "Password:">Password:</label><br/>
                <input type = "text" class = "shadow appearance-none border rounded-lg py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-lg" id = "Username"/>
            </form>
        </div>
        
    </body>
    </>
  )
}

export default account_creation