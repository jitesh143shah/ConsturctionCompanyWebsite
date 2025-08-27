import { BsBuildings } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBlackBook, GiBulldozer } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { PiShovelBold } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { TbBuildingChurch } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <div className="bg-gray py-40 ">
        <div className="container">
          <div className="flex  justify-between items-center font-roboto pb-20  ">
            <div className="flex flex-col gap-5">
              <span className="text-2xl font-poppins ">Our Services</span>
              <span className="text-5xl font-bold text-primary">
                We Offer a Range of Services
                <br /> to Meet Your Needs
              </span>
              <p className="tracking-normal [word-spacing:0.4rem]">
                I'm a paragraph. Click here to add your own text and edit me.{" "}
                <br />
                Let your users get to know you.
              </p>
            </div>
            <div>
              <div
                className="bg-primary py-4 px-15 hover:bg-gray border-1 border-primary
           hover:border-secondary hover:text-secondary duration-500"
              >
                Read More
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-5 gap-4 ">
              <div></div>

              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50  py-20 px-10"
              >
                <BsBuildings className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50    py-20 px-10"
              >
                <IoHomeOutline className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50    py-20 px-10"
              >
                <GiBlackBook className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50    py-20 px-10"
              >
                <FaUserAstronaut className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50    py-20 px-10"
              >
                <TbBuildingChurch className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50   py-20 px-10"
              >
                <GiBulldozer className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50    py-20 px-10"
              >
                <SlSettings className="text-primary relative text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <SlSettings className="text-primary ml-20 mt-[-50px] text-4xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-fit  gap-5 bg-amber-50   py-20 px-10"
              >
                <PiShovelBold className="text-primary text-7xl font-extralight group-hover:translate-x-15 duration-500 " />
                <span className="text-3xl">Pre-Construction</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
