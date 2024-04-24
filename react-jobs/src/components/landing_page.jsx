import React from 'react'
import { Link } from 'react-router-dom';
import Forms from "./form"

function landing_page() {

    return (
    
    <>
    
    <body className='min-h-screen bg-gray-500 flex justify-center items-center'>

            

           <div>
            <Forms route="api/token/" method="Landing"/>
            </div>
    </body>

    </>
    )

}
 
export default landing_page;

