import React from 'react'
import Navbar from './navbar'
import JobCard from './Job_Card'
import { Container } from 'postcss/lib/postcss'

const Jobs_page = () => {
  return (
    <>
      <body className='h-min-screen'>

        <div className='flex'>

          <div className='w-64'>
            <Navbar/>
          </div>

          <div className='flex flex-col flex-grow'>

            <h1 className='flex items-center justify-center h-32 w-full bg-gray-400 text-center text-black font-bold text-4xl '>
              Explore Your Next Career Move
            </h1>
          

            <div className='bg-gray-500 flex'>

              <div className='bg-gray-500 flex'>

                <div className='mt-4 ml-4 mb-4'>
                  <JobCard title="Apple - Hardware Design Intern"/>
                </div>

                <div className='mt-4 ml-4'>
                  <JobCard title="Apple - Front-End Developer Intern"/>
                </div>

                <div className='mt-4 ml-4 mr-4'>
                  <JobCard title="ResMed - Software Engineer Intern"/>
                </div>

                <div className='mt-4 ml-4 mr-4 mb-4'>
                  <JobCard title="Northrop Grumann - ECE Intern"/>
                </div>

              </div>

            </div>

            <div className='bg-gray-500 flex h-screen'>

              <div className='bg-gray-500 flex'>

                <div className='mt-4 ml-4 mb-4'>
                  <JobCard title="Veritas - Security Engineer"/>
                </div>

                <div className='mt-4 ml-4'>
                  <JobCard title="Amazon - Solution Architect"/>
                </div>

                <div className='mt-4 ml-4 mr-4'>
                  <JobCard title="L3 Harris - Communication Systems Intern"/>
                </div>

                <div className='mt-4 ml-4 mr-4 mb-4'>
                  <JobCard title="Northrop Grumann - CAD Intern"/>
                </div>

              </div>

            </div>

          </div>
      </div>
      </body>

    </>
  )
}

export default Jobs_page
