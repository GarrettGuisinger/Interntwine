import React from 'react';
import Navbar from './navbar';
import JobCard from './Job_Card';
import Search from './search'
import Foot from './Footer'

const JobsPage = () => {
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="sticky w-45 bg-gray-300 min-h-screen flex">
        <Navbar />
        <Search />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full bg-gray-500">

        {/* Header */}
        <h1 className="flex items-center justify-center h-32 bg-gray-400 text-center text-black font-bold text-4xl">
          Explore Your Next Career Move
        </h1>

        {/* Job Postings Grid */}
        <div className="flex flex-wrap justify-center p-4">
          {/* Job Cards */}
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard
              link="https://jobs.apple.com/en-us/details/200480068/hardware-technology-internships"
              title="Apple - Hardware Design Intern"
            />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard
              link="https://jobs.apple.com/en-us/details/200544193/software-design-intern?team=STDNT"
              title="Apple - Software Design Intern"
            />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard
              link="https://resmed.wd3.myworkdayjobs.com/ResMed_External_Careers/job/Peachtree-Corners-GA-United-States/Product-Management-Intern_JR_032796?source=LinkedIn"
              title="ResMed - Product Management Intern"
            />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard
              link="https://www.northropgrumman.com/jobs/Engineering/Mechanical/United-States-of-America/Utah/Roy/R10157266/2024-associate-mechanical-engineer-roy-ut"
              title="Northrop Grumann - Associate Mechanical Engineer"
            />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard 
            link = "https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/details/PhD-Research-Intern--Computer-Vision-and-Deep-Learning---Summer-2024_JR1982102?workerSubType=0c40f6bd1d8f10adf6dae42e46d44a17&workerSubType=ab40a98049581037a3ada55b087049b7"
            title="NVIDIA - PhD Research Intern, Computer Vision and Deep Learning" />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard 
            link = "https://amazon.jobs/en/jobs/2622381/embedded-software-engineer-taiwan"
            title="Amazon - Embedded Software Engineer, Taiwan" />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard 
            link = "https://careers.l3harris.com/job/west-palm-beach/intern-design-engineering/4832/59784529248"
            title="L3 Harris - Intern - Design Engineering" />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard 
            link="https://careers.l3harris.com/job/palm-bay/software-engineer-intern-d-palm-bay-fl/4832/60083552336"
            title="L3 Harris - Software Engineer Intern D" />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
            <JobCard
              link="https://careers.viasat.com/jobs/2902/job?utm_source=indeed_integration&iis=Job%20Board&iisn=Indeed&indeed-apply-token=73a2d2b2a8d6d5c0a62696875eaebd669103652d3f0c2cd5445d3e66b1592b0f"
              title="Viasat - Data Scientist/Analyst Intern"
            />
            <Foot /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;