import React from 'react'
import { Link } from 'react-router-dom';
import Forms from "./form"

function landing_page() {

    return (
    
    <>
    
    <body className='h-screen bg-gray-500'>

            <div className='flex justify-center items-center pb-5'>
                <h1 className='text-5xl text-center font-bold'>
                    Welcome to Interntwine
                </h1>
            </div>

            <div className='flex justify-center'>
            <Forms route="api/token/" method="Landing"/>
        </div>

    </body>

    </>
    )

}
 
export default landing_page;

