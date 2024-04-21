import React from 'react'
import Forms from './form'

const account_creation = () => {
  return (
    <>

        <body className='min-h-screen bg-gray-500 flex justify-center items-center'>

            <div>
                <Forms route="api/token/" method="Test"/>
            </div>
        </body>

    </>
  )
}

export default account_creation