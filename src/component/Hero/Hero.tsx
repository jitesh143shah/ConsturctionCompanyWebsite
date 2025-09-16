// import { construction } from "../../images";

// import { construction } from "../../images";

import Navbar from "../Navbar/Navbar";
import { VideoOne } from "../../video";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="    ">
        <div className="relative ">
          <div className="absolute z-[-10] h-[100%] w-[100%]">
            {/* <img
              src={construction}
              alt="Construction"
              className="h-full w-full"
            /> */}
            <video
              src={VideoOne}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            ></video>
          </div>
          <div
            className="absolute z-[-5] h-full bg-black py-[29%]
           px-[50%] opacity-50 "
          ></div>
          <div>
            <Navbar />
          </div>
          <div className="flex container flex-col text-white  justify-center  h-[100%] ">
            <div
              className="flex flex-col justify-center my-20 
            gap-7 md:gap-15 h-full"
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-roboto font-semibold ">
                Building a <br /> Concert Future
              </span>
              <span className="text-2xl  md:text-4xl font-semibold">
                Honest, Reliable Builder since 1998
              </span>
              <div
                className="flex gap-5 md:gap-10 md:flex-row flex-col
            "
              >
                <Link 
                  to="project"
                  target="_blank"
                  className="border-1 border-primary bg-primary rounded-xl  hover:bg-secondary text-center
               hover:text-  px-2 sm:px-4 lg:px-15 py-2 md:py-4 duration-500 w-1/2 sm:w-2/3 md:w-full"
                >
                  <button>View Project </button>
                </Link>
                <Link
                  to="about-us"
                  target="_blank"
                  className="border-1 border-white text-white  rounded-xl hover:bg-primary text-center
               hover:text-secondary px-2 sm:px-4 lg:px-15 py-2 md:py-4 duration-500 w-1/2 sm:w-2/3 md:w-full"
                >
                  <button>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
