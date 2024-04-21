import React from 'react'
import Forms from './form'

const Forgot_Password = () => {
  return (
    <>
        <body className='min-h-screen bg-gray-500 flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Forms route="api/token/" method="Forgot"/>
            </div>
        </body>
    </>
  )
}

export default Forgot_Password