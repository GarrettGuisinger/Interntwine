import React from 'react'
import { Link } from 'react-router-dom';
import Forms from "./form"

function landing_page() {

    return (
    
    <>
    
    <body className='min-h-screen bg-gray-500 flex justify-center items-center'>

            
        <div>
            <h1 className='flex items-center justify-center font-bold text-5xl pb-5'>
                Interntwine
            </h1>
            <Forms route="api/token/" method="Landing"/>
        </div>

    </body>

    </>
    )

}
 
export default landing_page;

