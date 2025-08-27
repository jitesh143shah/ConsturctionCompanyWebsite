// import { construction } from "../../images";

import { VideoTwo } from "../../video";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <>
      <div className="   ">
        <div className="relative pb-25 ">
          <div className="absolute z-[-10] h-[100%] w-[100%]">
            {/* <img
              src={construction}
              alt="Construction"
              className="h-full w-full "
            /> */}
            <video
              src={VideoTwo}
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
            <div className="flex flex-col justify-center my-30  mx-50 gap-15 h-full">
              <span className="text-9xl font-roboto font-semibold">
                Building a <br /> Concert Future
              </span>
              <span className="text-4xl font-semibold">
                Honest, Reliable Builder since 1998
              </span>
              <div className="flex gap-4">
                <button
                  className="border-1 border-primary bg-primary  hover:bg-secondary
               hover:text-primary  px-15 py-4 duration-500"
                >
                  View Project
                </button>
                <button
                  className="border-1 border-white text-white  hover:bg-primary
               hover:text-secondary px-15 py-4 duration-500"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
