import { FaArrowDown } from "react-icons/fa";
import { About, Footer, Navbar, Services } from "../../component/imports";
import { building } from "../../images";

const AboutPage = () => {
  return (
    <>
      <div>
        <Navbar />
         <div className="mb-5">
            <h1 className="capitalize text-center text-4xl md:text-6xl lg:text-8xl font-bold pb-12
            bg-fixed bg-center bg-cover h-[600px] justify-center flex items-center rounded-b-[15%] 
            text-white         duration-500             bg-no-repeat 
             " 
           style={{ backgroundImage: `url(${building})  ` }}>
            <div className="flex items-center justify-center group hover:underline duration-500 gap-5 hover:text-primary" >
               <span className=" "> Conctact Us</span>
             <span className="group-hover:translate-y-15 duration-500 text-2xl md:text-4xl xl:text-6xl"><FaArrowDown/></span>
            </div>
            </h1>
          </div>

        <About />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
