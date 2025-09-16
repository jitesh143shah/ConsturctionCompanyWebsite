import { useState } from "react";
import { Footer, Navbar } from "../../component/imports";
import { building } from "../../images";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const [jobs] = useState([
    {
      title: "Site Engineer",
      location: "Kathmandu, Nepal",
      experience: "2+ years",
      id: 1,
    },
    {
      title: "Project Manager",
      location: "Pokhara, Nepal",
      experience: "5+ years",
      id: 2,
    },
    {
      title: "Construction Supervisor",
      location: "Bhaktapur, Nepal",
      experience: "3+ years",
      id: 3,
    },
    {
      title: "Civil Architect",
      location: "Lalitpur, Nepal",
      experience: "4+ years",
      id: 4,
    },
  ]);

  return (
  <>
  <Navbar/>
  <div className="mb-5">
            <h1 className="capitalize text-center text-4xl md:text-6xl lg:text-8xl font-bold pb-12
            bg-fixed bg-center bg-cover h-[400px] justify-center flex items-center rounded-b-[15%] 
            text-white         duration-500             bg-no-repeat 
             " 
           style={{ backgroundImage: `url(${building})  ` }}>
            <div className="flex items-center justify-center group hover:underline duration-500 gap-5" >
               <span className=" capitalize"> Build your Careers</span>
             <span className="group-hover:translate-y-15 duration-500 text-2xl md:text-4xl xl:text-6xl"><FaArrowDown/></span>
            </div>
            </h1>
          </div>
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Careers at MCR Construction
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border-2 border-primary p-6 rounded-2xl shadow-md hover:shadow-lg 
            transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Experience:</strong> {job.experience}
            </p>
            <Link
              to={`mailto:hr@mcrconstruction.com?subject=Application for ${job.title}`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:bg-secondary 
              transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  <Footer/>
  
  </>
  );
};

export default CareersPage;
